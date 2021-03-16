import { isRightTriangle, task2, quadraticRoots } from "./h9";

describe("Homework_9", () => {
  describe("task1", () => {
    it("isFunction", () => {
      expect(typeof isRightTriangle).toBe("function");
    });
    it("standard case", () => {
      expect(isRightTriangle(3, 4, 5)).toBe("yes");
      expect(isRightTriangle(10, 24, 26)).toBe("yes");
      expect(isRightTriangle(3, 4, 6)).toBe("no");
      expect(isRightTriangle(11, 9, 3)).toBe("no");
    });
  });
  describe("task2", () => {
    it("isFunction", () => {
      jest.spyOn(window, "prompt").mockReturnValue("10");
      expect(typeof task2).toBe("function");
    });
    it("standard case", () => {
      jest.spyOn(window, "prompt").mockReturnValue("10");
      const spy = jest.spyOn(console, "log");
      task2();
      expect(spy.mock.calls[0][0]).toBeCloseTo(62.83);
      expect(spy.mock.calls[0][1]).toBeCloseTo(314.16);
    });
  });
  describe("task3", () => {
    it("isFunction", () => {
      jest.spyOn(window, "prompt").mockReturnValue("10");
      expect(typeof quadraticRoots).toBe("function");
    });
    it("a=0", () => {
      expect(quadraticRoots(0, 1, 2)).toBe("the coefficient must be non-zero");
    });
    it("D>0", () => {
      expect(quadraticRoots(1, -8, 12)).toEqual([6, 2]);
    });
    it("D=0", () => {
      expect(quadraticRoots(1, -6, 9)).toEqual(3);
    });
    it("D<0", () => {
      expect(quadraticRoots(5, 3, 7)).toBe("no roots");
    });
  });
});
