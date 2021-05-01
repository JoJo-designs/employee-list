const fs = require('fs');
const Employee = require("../employee");
const Manager = require("../manager");
const Engineer = require("../engineer");
const untillity = require("../untillity");


jest.mock("fs");

describe("Untillity", () => {
    describe("buildFile", () => {
        it("Checks if buildFile creates a html file", () => {

          const writeFileSpy = jest.spyOn(fs, "writeFile");
          const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
          const memberTwo = new Manager("Manager", "Sandy", 2, "Sandy@email.com", 23); 
          const memberthree = new Engineer("Engineer", "Chirs", 2, "chris@email.com", "chrisIsCooL");
  
          const team = [memberOne, memberTwo, memberthree]

          untillity.buildFile(team);
          expect(writeFileSpy).toHaveBeenCalledTimes(1);
      
          writeFileSpy.mockClear();  
      });
     });

     describe("loopteam", () => {
      it("should check the lenght of", () => {
        const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
        const memberTwo = new Manager("Manager", "Sandy", 2, "Sandy@email.com", 23); 
        const memberthree = new Engineer("Engineer", "Chirs", 2, "chris@email.com", "chrisIsCooL");

        const team = [memberOne, memberTwo, memberthree]

        untillity.loopTeam(team);
        expect(team.length).toEqual(3);
      });

      it("should loop the teams array", () => {
        const memberOne = new Employee("Employee", "Al", 1, "al@email.com");
        const team = [memberOne];

        const res = untillity.loopTeam(team);
        expect(res).toEqual(untillity.buildEmployee(memberOne));
    });
  });
  });