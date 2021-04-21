//Call dependancies
const inquirer = require('inquirer');


// Making constructor odjects
function Manager(role, name, employId, email, officeNum) {
    this.role = role;
    this.name = name;
    this.employId = employId;
    this.email = email;
    this.officeNum = officeNum;
};

function openMenu() {
    inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select a job title to add',
        choices: ["Employee", "Engineer", "Intern", "Manager"],
        name: 'menu',
      },
    ])
    .then((answer) => {
      if(answer.menu === "Employee"){
        addEmployee();
      } else if(answer.menu === "Engineer"){
        addEngineer();
      } else if(answer.menu === "Intern"){
        addIntern();
      } else {
        addManager();
      }
    });
} 

// functions will be spaific for each job title each one will have prompted questions
// when the after all the questions are answerd and new odjects are made the open menu 
// function will run again.

// function that add an employee
function addEmployee(){
  console.log("Added employee")
}

//function that add an engineer
function addEngineer(){
  console.log("Added engineer")
}

//funtion that add an intern
function addIntern(){
  console.log("Added intern")
}

//funtion that add a manager
function addManager(){
  console.log("Added manager")
}

openMenu();


 