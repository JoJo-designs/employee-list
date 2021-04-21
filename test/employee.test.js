const employ = require("../index");

// Not working
describe("index", () => {
    describe("Menu", () => {
        it("creates a new manager odject", () => {
          const result = new Manager("Manager", "name", "employId", "email", "officeNum")
          expect(result instanceof Manager()).toEqual(true);
        });
      });
  });