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
        //addEmployee();
        console.log("Add Employee")
      } else if(answer.menu === "Engineer"){
        //addEngineer();
        console.log("Add Engineer")
      } else if(answer.menu === "Intern"){
        //addIntern();
        console.log("Add Intern")
      } else {
        //addManager();
        console.log("Add Manager")
      }
    });
} 

openMenu();


 