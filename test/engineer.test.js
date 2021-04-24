const Engineer = require("../engineer");

describe("engineer", () => {
    describe("object", () => {
        it("create new engineer odject", () => {
          const job = "Engineer"
          const named = "Jo"
          const employId = 32910
          const email = "Email@email.com"
          const github = "JOGIT"
          const working = new Engineer(job, named, employId, email, github)
          expect(working.github).toEqual("JOGIT");
        });
      });
  });