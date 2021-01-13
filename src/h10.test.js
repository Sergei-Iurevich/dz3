import { task1 } from "./h10";

describe("Homework_10", () => {
  describe("task1", () => {
    it("dd.mm.yyyy", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12.01.2020");
      expect(task1()).toBe("Date");
    });
    it("dd-mm-yyyy", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12-01-2020");
      expect(task1()).toBe("Date");
    });
    it("wrong date", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12.01-2020");
      expect(task1()).toBe("Invalid string");
    });
    it("mail", () => {
      jest.spyOn(window, "prompt").mockReturnValue("lisa.lol-is@mail.com");
      expect(task1()).toBe("Email");
    });
    it("wrong mail", () => {
      jest.spyOn(window, "prompt").mockReturnValue("lisa.lol-is@mail.(com");
      expect(task1()).toBe("Invalid string");
    });
    it("Number Phone1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("8(915)1235103");
      expect(task1()).toBe("Number phone");
    });
    it("Number Phone2", () => {
      jest.spyOn(window, "prompt").mockReturnValue("+7(915)123-51-03");
      expect(task1()).toBe("Number phone");
    });
    it("Wrong Number Phone1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("-7(915)1235103");
      expect(task1()).toBe("Invalid string");
    });
    it("Wrong Number Phone2", () => {
      jest.spyOn(window, "prompt").mockReturnValue("8(915)1235--1030");
      expect(task1()).toBe("Invalid string");
    });
  });
});
