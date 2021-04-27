//Call dependancies
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');

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
      buildFile();
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
module.exports.openMenu = openMenu;

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

// this one is ment to built the html file
 function buildFile() {
  fs.writeFile('./output/index.html', `
  <!DOCTYPE html>
  <html>
      <header>
          <title>Team List</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
      </header>
      <body>
      <section class="pagetop"><h1>My Team List</h1></section>
          <section class="employees">
              ${loopTeam(team)}
          </section>
      </body>
  </html>  `, (err) =>
  err ? console.error(err) : console.log('Success, your html file was generated!')
);
}

// This one is ment to loop the the object in the array and calls another function that builds the html for each job
function loopTeam(team) {
  let teamHTML = [];

    team.forEach(member => {
      if (member.role === "Employee") {
      teamHTML.push(buildEmployee(member))
    } else if (member.role === "Engineer") {
      teamHTML.push(buildEngineer(member))
    } else if (member.role === "Intern") {
      teamHTML.push(buildIntern(member))
    } else  {
      teamHTML.push(buildManager(member))
    } 
  });
  return teamHTML.join("")
}  

//Built html for each element
function buildEmployee(member) {
let person = 
  `<div class="cards">
      <div class="cardTop">
        <h2>${member.name}</h2>
        <h3>${member.role}</h3>
  </div>
        <p>ID: ${member.employId}</p>
        <p>Email: ${member.email}</p>
  </div>
  <!--added employee-->\n`
    return person
} 
  
function buildEngineer(member) {
  let person = 
  `<div class="cards">
      <div class="cardTop">
        <h2>${member.name}</h2>
        <h3>${member.role}</h3>
    </div>
        <p>ID: ${member.employId}</p>
        <p>Email: ${member.email}</p>
        <a href="https://github.com/${member.github}"><p>GitHub: ${member.github}</p></a>
  </div>
  <!--added employee-->\n`
      return person
  } 

  function buildIntern(member) {
    let person = 
    `<div class="cards">
      <div class="cardTop">
          <h2>${member.name}</h2>
          <h3>${member.role}</h3>
      </div>
          <p>ID: ${member.employId}</p>
          <p>Email: ${member.email}</p>
          <p>School: ${member.school}</p>
    </div>
    <!--added employee-->\n`
        return person
    } 

    function buildManager(member) {
      let person = `<div class="cards">
          <div class="cardTop">
            <h2>${member.name}</h2>
            <h3>${member.role}</h3>
        </div>
            <p>ID: ${member.employId}</p>
            <p>Email: ${member.email}</p>
            <p>Office Number: ${member.officeNum}</p>
          </div>
          <!--added employee-->\n`
          return person
      } 

//Starts the file
makeNew();


 