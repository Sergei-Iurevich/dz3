import { sumArray, changeArray, maxAndMinItem } from "./h5";

describe("Homework_5", () => {
  describe("sumArray", () => {
    it("check1", () => {
      const spy = jest.spyOn(console, "log");
      sumArray();
      expect(spy.mock.calls[0][0]).toBe(55);
    });
  });

  describe("changeArray", () => {
    it("check1", () => {
      expect(changeArray([1, 2, 3])).toEqual([2, 4, 6]);
    });
    it("check2", () => {
      expect(changeArray([])).toEqual([]);
    });
  });
  describe("maxAndMinItem", () => {
    it("standard case", () => {
      const arr = maxAndMinItem([1, 3, 44, 5, 9]);
      expect(arr[0]).toBe(1);
      expect(arr[1]).toBe(44);
    });

    it("check array is empty", () => {
      const arr = maxAndMinItem([]);
      expect(arr).toBe("Array is empty");
    });
  });
});
