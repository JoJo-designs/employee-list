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

function addEmployee(){
  console.log("Added empolyee")
}
function addEngineer(){
  console.log("Added engineer")
}
function addIntern(){
  console.log("Added intern")
}
function addManager(){
  console.log("Added manager")
}

openMenu();


 