//Call dependancies
const inquirer = require('inquirer');
const fs = require('fs');
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

function makeOdject(answer, value) {
  if (answer.menu === "Employee"){
    const newEmployee = new Employee(answer.menu, answer.name, answer.employeeId, answer.email)
    team.push(newEmployee)
    console.log(team)
    buildFile()
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

 function buildFile() {
  fs.writeFile('./output/index.html', `
  <!DOCTYPE html>
  <html>
      <header>
          <title>Team List</title>
          <link rel="stylesheet" href="style.css">
      </header>
      <section class="pagetop"><h1>My Team List</h1></section>
      <body>
          <section id="employees">
              ${loopTeam(team)}
              </div>
          </section>
      </body>
  </html>  `, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

function loopTeam(team) {

    team.forEach(element => {
      
    if (Employee.role === "Employee") {
      `<div class="cards">
      <div class="cardTop">
      <h2>${Employee.name}</h2>
      <h3>Job Title</h3>
          </div>
          <p>ID: ${Employee.employId}</p>
          <p>Email: ${Employee.email}</p>
          </div>`
    }
  });
}  
  



openMenu();


 