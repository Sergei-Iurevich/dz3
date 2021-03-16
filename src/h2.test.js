import { maxOfTwoNumber, outputMonth, circleIntoSquare } from "./h2";

describe("Homework_2", () => {
  describe("task1: print the largest number to the console", () => {
    it("check the result of the condition", () => {
      jest
        .spyOn(window, "prompt")
        .mockReturnValueOnce("4")
        .mockReturnValueOnce("7");
      jest.spyOn(console, "log");
      console.log = jest.fn();
      maxOfTwoNumber();
      expect(console.log.mock.calls[0][0]).toBe(7);
    });
  });

  describe("task2: print month to console", () => {
    it("check the result of the condition", () => {
      jest.spyOn(window, "prompt").mockReturnValue("5");
      jest.spyOn(console, "log");
      outputMonth();
      expect(console.log.mock.calls[0][0]).toBe("Май");
    });
  });

  describe("task3: will the circle fit into a square", () => {
    it("check the result of the area comparison", () => {
      jest
        .spyOn(window, "prompt")
        .mockReturnValueOnce("12.56")
        .mockReturnValueOnce("16");
      jest.spyOn(console, "log");
      circleIntoSquare();
      expect(console.log.mock.calls[0][0]).toBe("yes");
    });
  });
});
