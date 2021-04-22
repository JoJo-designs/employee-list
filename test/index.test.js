const Managment = require("../index");

describe("index", () => {
    describe("Menu", () => {
        it("create new odject", () => {
          const job = "Manager"
          const named = "Jesse"
          const working = new Managment(job, named)
          expect(obj instanceof Managment()).toEqual(working);
        });
      });
  });