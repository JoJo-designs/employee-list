//Call dependancies
const inquirer = require('inquirer');


// Making constructor odjects
function Employee(role, name, employId, email, officeNum, github, school) {
    this.role = role;
    this.name = name;
    this.employId = employId;
    this.email = email;
    this.officeNum = officeNum;
    this.github = github;
    this.school = school;
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
      addEmployee(answer)
     });
} 

// functions will be spaific for each job title each one will have prompted questions
// when the after all the questions are answerd and new odjects are made the open menu 
// function will run again.

// function that add an employee
function addEmployee(answer){
  console.log(answer)
  console.log("Adding New Employee")
  inquirer
    .prompt([
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
}


openMenu();


 