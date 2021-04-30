//Call dependancies
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');
const untillity = require('./untillity');

let team = [];


// openMenu ask the user if they want to make another employee this will run after one person has be added. If user selects yes the 
//Make new function will run if they say no the function to build the html will run.
function openMenu(){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Add another Employee?',
      choices: ["Yes", "No"],
      name: 'add',
    },
  ])
  .then((selected) => {
    if (selected.add === "Yes"){
      makeNew();
    } else {
      untillity.buildFile(team);
    } 
   });
}

//Make new runs frist it forces users to add atleast one peopson to the team.
//will run after open meun after the first person is added
function makeNew() {
    inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select a job title to add',
        choices: ["Employee", "Engineer", "Intern", "Manager"],
        name: 'menu',
      },
      {
        type: 'input',
        message: 'What is thier name',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is thier employee id',
        name: 'employeeId',
      },
      {
        type: 'input',
        message: 'What is thier email',
        name: 'email',
      },
    ])
    .then((answer) => {
      if (answer.menu === "Engineer"){
        addEngineer(answer);
      } else if (answer.menu === "Intern") {
        addIntern(answer);
      } else if (answer.menu === "Manager") {
        addManager(answer);
      } else {
        makeOdject(answer);
      } 
     });
} 

// functions for each of the differant job titles. adds questions for the spafice jobs than calls the makeOdject function
function addEngineer(answer) {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is thier GitHub username',
        name: 'gitHub',
      },
    ])
    .then((value) => {
     makeOdject(answer, value);
    });
}

function addIntern(answer) {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What school are they from',
        name: 'schools',
      },
    ])
    .then((value) => {
      makeOdject(answer, value);
    });
}

function addManager(answer) {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is thier office number',
        name: 'officeNumber',
      },
    ])
    .then((value) => {
      makeOdject(answer, value);
    });
}

// Builds the Odjects based on the data a spilts data based on each job title so each one gets the right data.
function makeOdject(answer, value) {
  if (answer.menu === "Employee"){
    const newEmployee = new Employee(answer.menu, answer.name, answer.employeeId, answer.email)
    team.push(newEmployee)
    openMenu()
  } else if (answer.menu === "Engineer") {
    const newEngineer = new Engineer(answer.menu, answer.name, answer.employeeId, answer.email, value.gitHub)
    team.push(newEngineer)
    openMenu()
  } else if (answer.menu === "Intern") {
    const newIntern = new Intern(answer.menu, answer.name, answer.employeeId, answer.email, value.schools)
    team.push(newIntern)
    openMenu()
  } else {
    const newManager = new Manager(answer.menu, answer.name, answer.employeeId, answer.email, value.officeNumber)
    team.push(newManager)
    openMenu()
  }
}


//Starts the file
makeNew();


