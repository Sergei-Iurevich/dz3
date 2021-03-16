import { diff, isWord, pow } from "./h6";

describe("Homework_6", () => {
  describe("task1", () => {
    it("standard case", () => {
      expect(diff(2, 5)).toBe(3);
    });
    it("boundary values: is 0", () => {
      expect(diff(0, 0)).toBe(0);
    });
    it("no arguments", () => {
      expect(diff()).toBe("no arguments");
    });
    it("one of the arguments is a string", () => {
      expect(diff("a", 0)).toBe("incorrect parameters");
      expect(diff("a", "b")).toBe("incorrect parameters");
    });
  });
  describe("task2", () => {
    it("standard case", () => {
      expect(isWord("Bob")).toBeTruthy();
      expect(isWord("Bob is")).toBeFalsy();
      expect(isWord("Bob is Bob ")).toBeFalsy();
    });
    it("boundary values", () => {
      expect(isWord()).toBe("no arguments");
    });
    it("argument is not a string", () => {
      expect(isWord([1, 2, 3])).toBe("incorrect parameters");
    });
  });

  describe("task3", () => {
    it("standard case", () => {
      expect(pow(2, 3)).toBe(8);
      expect(pow(0, 1)).toBe(0);
      expect(pow(-4, -3)).toBe(-0.015625);
    });
    it("boundary values", () => {
      expect(pow(0, 0)).toBe(1);
      const { MAX_SAFE_INTEGER } = Number;
      expect(pow(Number.MAX_SAFE_INTEGER, 1)).toBe(MAX_SAFE_INTEGER);
      expect(pow(Number.MAX_SAFE_INTEGER + 1, 1)).toBe(
        Number.MAX_SAFE_INTEGER + 1
      );
    });
    it("no arguments", () => {
      expect(pow()).toBe("no arguments");
    });

    it("arguments is not a number", () => {
      expect(pow("a", 0)).toBe("incorrect parameters");
      expect(pow(4, "0")).toBe("incorrect parameters");
      expect(pow("Bob", "0")).toBe("incorrect parameters");
      expect(pow([1, 2, 3], 5)).toBe("incorrect parameters");
    });
  });
});
