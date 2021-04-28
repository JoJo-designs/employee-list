const index = require("../employee-list/index");

describe("index", () => {
    describe("loopTeam", () => {
        it("Check to see if the file will loop the team", () => {
          const team = ["Manager", "Employee", "Engineer", "Employee", "Intern"]
          const teamHTML = ["Manager Employee Engineer Employee Intern"]

          loopTeam(team)

          expect(team).toEqual(teamHTML);
        });
      });
  });