//Call dependancies
const inquirer = require('inquirer');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

let team = [];


// open menu selects the job title adds name employee id and email. will seperate the
// differant job titles into their own functions when the questions are answerd.
function openMenu() {
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
module.exports.openMenu = openMenu;

// functions for each of the differant job titles
function addEngineer(answer) {
  console.log(answer)
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
  console.log(answer)
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
  console.log(answer)
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

function makeOdject(answer, value) {
  if (answer.menu === "Employee"){
    const newEmployee = new Employee(answer.menu, answer.name, answer.employeeId, answer.email)
    team.push(newEmployee)
    console.log(team)
    openMenu()
  } else if (answer.menu === "Engineer") {
    const newEngineer = new Engineer(answer.menu, answer.name, answer.employeeId, answer.email, value.gitHub)
    team.push(newEngineer)
    console.log(team)
    openMenu()
  } else if (answer.menu === "Intern") {
    const newIntern = new Intern(answer.menu, answer.name, answer.employeeId, answer.email, value.schools)
    team.push(newIntern)
    console.log(team)
    openMenu()
  } else {
    const newManager = new Manager(answer.menu, answer.name, answer.employeeId, answer.email, value.officeNumber)
    team.push(newManager)
    console.log(team)
    openMenu()
  }
}
// I wanted to make the whole file in one go but I am starting to think that it may be a good idea to add team blocks as I go.  

function buildFile(){

}



openMenu();


 