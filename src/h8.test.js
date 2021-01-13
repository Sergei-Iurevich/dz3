import { getTheDay, getHrs } from "./h8";

describe("Homework_8", () => {
  describe("task1", () => {
    it("is function", () => {
      expect(typeof getTheDay).toBe("function");
    });
    it("result is number", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12.12.1987");
      expect(typeof getTheDay()).toBe("number");
    });
    it("standard case", () => {
      jest.spyOn(window, "prompt").mockReturnValue("01.12.1987");
      expect(getTheDay()).toBe(2);
    });
  });
  describe("task2", () => {
    it("check1", () => {
      const spyConsole = jest.spyOn(console, "log");
      const mockDate = new Date("2020-12-15T01:13:15.343+03:00");
      jest.spyOn(global, "Date").mockImplementationOnce(() => mockDate);
      getHrs();
      expect(spyConsole.mock.calls[0][0]).toBe(73);
    });
  });
});
