import { task1, task2, task3 } from "./h5";

describe("Homework_5", () => {
  describe("task1", () => {
    it("check1", () => {
      const spy = jest.spyOn(console, "log");
      task1();
      expect(spy.mock.calls[0][0]).toBe(55);
    });
  });

  describe("task2", () => {
    it("check1", () => {
      expect(task2([1, 2, 3])).toEqual([2, 4, 6]);
    });
    it("check2", () => {
      expect(task2([])).toEqual([]);
    });
  });
  describe("task3", () => {
    it("standard case", () => {
      const arr = task3([1, 3, 44, 5, 9]);
      expect(arr[0]).toBe(1);
      expect(arr[1]).toBe(44);
    });

    it("check array is empty", () => {
      const arr = task3([]);
      expect(arr).toBe("Array is empty");
    });
  });
});
