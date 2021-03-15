import { multiplicationAndSum, sumLenStrings, sumDigital } from "./h1";

describe("Homework_1", () => {
  describe("task_1: finds the sum and product of numbers", () => {
    it("prints sum and product to the console", () => {
      jest.spyOn(console, "log");
      multiplicationAndSum();
      expect(console.log.mock.calls[0][0]).toBe(10);
      expect(console.log.mock.calls[1][0]).toBe(21);
    });
  });

  describe("task_2: output length string", () => {
    it("prints line length to console", () => {
      jest.spyOn(console, "log");
      sumLenStrings();
      expect(console.log.mock.calls[0][0]).toBe(6);
    });
  });

  describe("task_3: sum of digits three-digit number", () => {
    it("prints sum of digits three-digit number to the console", () => {
      jest.spyOn(window, "prompt").mockReturnValue("123");
      jest.spyOn(console, "log");
      sumDigital();
      expect(console.log.mock.calls[0][0]).toBe(6);
    });
  });
});
