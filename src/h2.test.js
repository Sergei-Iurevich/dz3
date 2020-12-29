const { task1, task2, task3 } = require("./h2");

describe("Homework_2", () => {
  describe("task1: print the largest number to the console", () => {
    it("check the result of the condition", () => {
      jest.spyOn(console, "log");
      task1();
      expect(console.log.mock.calls[0][0]).toBe(5);
    });
  });

  describe("task2: print month to console", () => {
    it("check the result of the condition", () => {
      jest.spyOn(window, "prompt").mockReturnValue("5");
      jest.spyOn(console, "log");
      task2();
      expect(console.log.mock.calls[0][0]).toBe("Май");
    });
  });

  describe("task3: will the circle fit into a square", () => {
    it("check the result of the area comparison", () => {
      jest.spyOn(console, "log");
      task3();
      expect(console.log.mock.calls[0][0]).toBe("yes");
    });
  });
});
