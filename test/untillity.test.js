const index = require("../untillity");

//const fs = require('fs');
const Employee = require("../employee");
const Manager = require("../manager");
const Engineer = require("../engineer");


jest.mock("fs");

describe("Untillity", () => {
    describe("buildFile", () => {
        it("Checks if buildFile creates a html file", () => {
          const path = "./output/index.html"
          const data = `<!DOCTYPE html><html><header><title>Team List</title><link rel="stylesheet" href="style.css"></header><body><section class="pagetop"><h1>My Team List</h1></section><section class="employees"></section></body></html>`;
          const dataString = toString(data);

          index.buildFile(path, data)
    
          expect(fs.writeFile).toEqual(path, dataString);
      });
     });
     describe("loopteam", () => {
      it("should loop the teams array", () => {
        const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
        const memberTwo = new Manager("Manager", "Sandy", 2, "Sandy@email.com", 23); 
        const memberthree = new Engineer("Engineer", "Chirs", 2, "chris@email.com", "chrisIsCooL");

        const team = [memberOne, memberTwo, memberthree]

        index.loopTeam(team)
        expect(team.length).toEqual(3);
      });
    });
  });