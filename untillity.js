//Call dependancie.
const fs = require('fs');
const Employee = require('./employee');
const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');
// const team = require('')

const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
const memberTwo = new Manager("Manager", "Sandy", 2, "Sandy@email.com", 23); 
const memberthree = new Engineer("Engineer", "Chirs", 2, "chris@email.com", "chrisIsCooL");
const team = [memberOne, memberTwo, memberthree]

// this one is ment to built the html file
function buildFile() {
    fs.writeFile('./output/index.html', `
    <!DOCTYPE html>
    <html>
        <header>
            <title>Team List</title>
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
            <a href="mailto:${member.email}"> <p>Email: ${member.email}</p></a>
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
            <a href="mailto:${member.email}"> <p>Email: ${member.email}</p></a>
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
            <a href="mailto:${member.email}"> <p>Email: ${member.email}</p> </a> 
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
                <a href="mailto:${member.email}"> <p>Email: ${member.email}</p></a>
                <p>Office Number: ${member.officeNum}</p>
              </div>
              <!--added employee-->\n`
              return person
          } 
          module.exports.buildFile = buildFile;
          module.exports.loopTeam = loopTeam;