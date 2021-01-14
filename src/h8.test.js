import { getTheDay, getHrs, searchYoungMan } from "./h8";

describe("Homework_8", () => {
  describe("task1: function getTheDay()", () => {
    it("is function", () => {
      expect(typeof getTheDay).toBe("function");
    });
    it("result is number", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12.12.1987");
      expect(typeof getTheDay()).toBe("number");
    });
    it("standard case: return 5", () => {
      jest.spyOn(window, "prompt").mockReturnValue("01.01.2021");
      expect(getTheDay()).toBe(5);
    });
  });

  describe("task2: function getHrs()", () => {
    let OriginalDate;
    beforeEach(() => {
      OriginalDate = window.Date;
      // eslint-disable-next-line func-names
      window.Date = function () {
        const date = new OriginalDate();
        date.setFullYear(2020, 12, 7);
        date.setHours(1, 12, 15);
        return date;
      };
    });
    afterEach(() => {
      window.Date = OriginalDate;
    });
    it("is function", () => {
      expect(typeof getHrs).toBe("function");
    });

    it("standard case is 72", () => {
      const spyConsole = jest.spyOn(console, "log");
      // const mockDate = new Date("2020-12-15T01:13:15.343+03:00");
      // jest.spyOn(global, "Date").mockImplementationOnce(() => mockDate);
      getHrs();
      expect(spyConsole.mock.calls[0][0]).toBe(72);
    });
  });

  describe("task3: function searchYoungMan()", () => {
    it("is function", () => {
      expect(typeof searchYoungMan).toBe("function");
    });
    it("result is string", () => {
      expect(typeof searchYoungMan()).toBe("string");
    });

    it("standard case is first man", () => {
      expect(searchYoungMan()).toBe("one");
    });
  });
});
