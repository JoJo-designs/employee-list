const Intern = require("../intern");

describe("intern", () => {
    describe("odject", () => {
        it("create new intern odject", () => {
          const job = "Intern"
          const named = "Izuku"
          const employId = 32910
          const email = "Email@email.com"
          const school = "UA Academy"
          const working = new Intern(job, named, employId, email, school)
          expect(working.school).toEqual("UA Academy");
        });
      });
  });

