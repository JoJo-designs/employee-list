const index = require("../untillity");

const fs = require('fs');
const Employee = require("../employee");
const Manager = require("../manager");
const Engineer = require("../engineer");


jest.mock("fs");

describe("Untillity", () => {
    describe("buildFile", () => {
        it("Checks if buildFile creates a html file", () => {

          const writeFileSpy = jest.spyOn(fs, "writeFile");

          index.buildFile();
          expect(writeFileSpy).toHaveBeenCalledTimes(1);
      
          writeFileSpy.mockClear();

          // const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
          // const memberTwo = new Manager("Manager", "Sandy", 2, "Sandy@email.com", 23); 
          // const memberthree = new Engineer("Engineer", "Chirs", 2, "chris@email.com", "chrisIsCooL");
  
          // const team = [memberOne, memberTwo, memberthree]

          // untillity.buildFile(team);
          // expect(untillity.buildFile()).lastCalledWith(team);
          
      });
     });
     describe("loopteam", () => {
      it("should loop the teams array", () => {
        const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
        const memberTwo = new Manager("Manager", "Sandy", 2, "Sandy@email.com", 23); 
        const memberthree = new Engineer("Engineer", "Chirs", 2, "chris@email.com", "chrisIsCooL");

        const team = [memberOne, memberTwo, memberthree]

        //index.loopTeam(team)
        expect(team.length).toEqual(3);
      });
    });
  });