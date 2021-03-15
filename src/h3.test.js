import { sumNumber, multiplicationTable, average } from "./h3";

describe("Homework_3", () => {
  describe("task1: sum of numbers from 50 to 100", () => {
    it("check sum", () => {
      jest.spyOn(console, "log");
      sumNumber();
      expect(console.log).toHaveBeenCalledWith(3825);
    });
  });

  describe("task2: multiplication table 7", () => {
    it("number of console calls", () => {
      const spy = jest.spyOn(console, "log");
      multiplicationTable();
      expect(spy.mock.calls.length).toBe(9);
    });

    it("checking arguments passed to the console", () => {
      jest.spyOn(console, "log");
      multiplicationTable();
      expect(console.log).toHaveBeenCalledTimes(9);
      expect(console.log).toHaveBeenCalledWith(7);
      expect(console.log).toHaveBeenLastCalledWith(63);
    });
  });

  describe("task3 ", () => {
    it("average for 5", () => {
      jest.spyOn(window, "prompt").mockReturnValue("5");
      jest.spyOn(console, "log");
      average();
      expect(console.log).toHaveBeenCalledWith(3);
    });
    it("average for 1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("1");
      jest.spyOn(console, "log");
      average();
      expect(console.log).toHaveBeenCalledWith(1);
    });
  });
});
