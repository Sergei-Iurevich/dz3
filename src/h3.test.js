const { task1, task2, task3 } = require("./h3");

describe("Homework_3", () => {
  describe("task1: sum of numbers from 50 to 100", () => {
    it("check sum", () => {
      const spy = jest.spyOn(console, "log");
      task1();
      expect(spy.mock.calls.length).toBe(1);
      expect(spy.mock.calls[0][0]).toBe(3825);
    });
  });

  describe("task2: multiplication table 7", () => {
    it("number of console calls", () => {
      const spy = jest.spyOn(console, "log");
      task2();
      expect(spy.mock.calls.length).toBe(9);
    });

    it("checking arguments passed to the console", () => {
      const spy = jest.spyOn(console, "log");
      task2();
      const arrayArgOfCalls = spy.mock.calls;
      const arrayTableOfMultiplication = [7, 14, 21, 28, 35, 42, 49, 56, 63];
      arrayArgOfCalls.forEach((item, i, array) => {
        expect(array[i][0]).toBe(arrayTableOfMultiplication[i]);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });
  });

  describe("task3 ", () => {
    it("average for 5", () => {
      jest.spyOn(window, "prompt").mockReturnValue("5");
      const spy = jest.spyOn(console, "log");
      task3();
      expect(spy.mock.calls[0][0]).toBe(3);
    });
    it("average for 1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("1");
      const spy = jest.spyOn(console, "log");
      task3();
      expect(spy.mock.calls[0][0]).toBe(1);
    });
  });
});
