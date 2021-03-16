import { multiplicationAndSum, sumLenStrings, sumDigital } from "./h1";

describe("Homework_1", () => {
  describe("task_1: finds the sum and product of numbers", () => {
    it("prints sum and product to the console", () => {
      jest
        .spyOn(window, "prompt")
        .mockReturnValueOnce("3")
        .mockReturnValueOnce("7");
      jest.spyOn(console, "log");
      multiplicationAndSum();
      expect(console.log).toHaveBeenNthCalledWith(1, 10);
      expect(console.log).toHaveBeenNthCalledWith(2, 21);
    });
  });

  describe("task_2: output length string", () => {
    it("prints line length to console", () => {
      jest
        .spyOn(window, "prompt")
        .mockReturnValueOnce("dom")
        .mockReturnValueOnce("home");
      jest.spyOn(console, "log");
      sumLenStrings();
      expect(console.log).toHaveBeenCalledWith(7);
    });
  });

  describe("task_3: sum of digits three-digit number", () => {
    it("prints sum of digits three-digit number to the console", () => {
      jest.spyOn(window, "prompt").mockReturnValue("123");
      jest.spyOn(console, "log");
      sumDigital();
      expect(console.log).toHaveBeenCalledWith(6);
    });
  });
});
