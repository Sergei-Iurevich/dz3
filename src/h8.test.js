import { getTheDay, getNumberMinutes, searchYoungMan } from "./h8";

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
      window.Date = jest.fn(() => {
        const date = new OriginalDate();
        date.setFullYear(2020, 12, 7);
        date.setHours(1, 12, 15);
        return date;
      });
    });
    afterAll(() => {
      window.Date = OriginalDate;
    });
    it("is function", () => {
      expect(typeof getNumberMinutes).toBe("function");
    });

    it("standard case is 72", () => {
      const spyConsole = jest.spyOn(console, "log");
      getNumberMinutes();
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
