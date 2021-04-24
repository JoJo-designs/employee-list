const Manager = require("../manager");

describe("manager", () => {
    describe("object", () => {
        it("create new manager odject", () => {
          const job = "Manager"
          const named = "Jesse"
          const employId = 32910
          const email = "Email@email.com"
          const officeNum = 37290209277
          const working = new Manager(job, named, employId, email, officeNum)
          expect(working.employId).toEqual(32910);
        });
      });
  });