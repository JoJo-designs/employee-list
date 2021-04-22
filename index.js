//Call dependancies
const inquirer = require('inquirer');


// Build constuctors
function Employee(role, name, employId, email) {
    this.role = role;
    this.name = name;
    this.employId = employId;
    this.email = email;
};

function Engineer(role, name, employId, email, github) {
  this.role = role;
  this.name = name;
  this.employId = employId;
  this.email = email;
  this.github = github;
};

function Intern(role, name, employId, email, school) {
  this.role = role;
  this.name = name;
  this.employId = employId;
  this.email = email;
  this.school = school;
};

function Manager(role, name, employId, email, officeNum) {
  this.role = role;
  this.name = name;
  this.employId = employId;
  this.email = email;
  this.officeNum = officeNum;
};

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
    .then((valueEn) => {
      makeOdject(answer, valueEn);
    });
}

function addIntern(answer) {
  console.log(answer)
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What school are they from',
        name: 'school',
      },
    ])
    .then((valueIn) => {
      makeOdject(answer, valueIn);
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
    .then((valueMa) => {
      makeOdject(answer, valueMa);
    });
}

function makeOdject(answer, valueEn, valueIn, valueMa) {

  if (answer.menu === "Employee"){
    answer.name = new Employee(answer.menu, answer.name, answer.employeeId, answer.email)
    console.log(employeeName)
  } else if (answer.menu === "Engineer") {
    answer.name = new Engineer(answer.menu, answer.name, answer.employeeId, answer.email, valueEn.gitHub)
    console.log(person)
  } else if (answer.menu === "Intern") {
    answer.name = new Intern(answer.menu, answer.name, answer.employeeId, answer.email, valueIn.school)
    console.log(person)
  } else {
    answer.name = new Manager(answer.menu, answer.name, answer.employeeId, answer.email, valueMa.officeNumber)
    console.log(person)
  }
}
//need to ask about how to make the names of each person the name 

openMenu();


 