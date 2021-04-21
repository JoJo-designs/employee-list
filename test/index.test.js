const employ = require("../index");

// Not working
describe("index", () => {
    describe("Menu", () => {
        it("creates a new manager odject", () => {
          const role = "manager"
          const obj = new Manager(role);

          const results = obj.value()
          expect(results instanceof Manager()).toEqual(true);
        });
      });
  });