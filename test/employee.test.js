const Employee = require("../employee");

describe("employee", () => {
    describe("odject", () => {
        it("creates a new employee odject", () => {
          
          const working = new Employee("Employee", "Jesse", 23819, "Email@email.com");
          expect(working.role).toEqual("Employee");
        });
      });
  });