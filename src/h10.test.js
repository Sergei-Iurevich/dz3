import { checkDate } from "./h10";

describe("Homework_10", () => {
  describe("checkDate", () => {
    it("dd.mm.yyyy", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12.01.2020");
      expect(checkDate()).toBe("Date");
    });
    it("dd-mm-yyyy", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12-01-2020");
      expect(checkDate()).toBe("Date");
    });
    it("wrong date", () => {
      jest.spyOn(window, "prompt").mockReturnValue("12.01-2020");
      expect(checkDate()).toBe("Invalid string");
    });
    it("mail", () => {
      jest.spyOn(window, "prompt").mockReturnValue("lisa.lol-is@mail.com");
      expect(checkDate()).toBe("Email");
    });
    it("wrong mail", () => {
      jest.spyOn(window, "prompt").mockReturnValue("lisa.lol-is@mail.(com");
      expect(checkDate()).toBe("Invalid string");
    });
    it("Number Phone1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("8(915)1235103");
      expect(checkDate()).toBe("Number phone");
    });
    it("Number Phone2", () => {
      jest.spyOn(window, "prompt").mockReturnValue("+7(915)123-51-03");
      expect(checkDate()).toBe("Number phone");
    });
    it("Wrong Number Phone1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("-7(915)1235103");
      expect(checkDate()).toBe("Invalid string");
    });
    it("Wrong Number Phone2", () => {
      jest.spyOn(window, "prompt").mockReturnValue("8(915)1235--1030");
      expect(checkDate()).toBe("Invalid string");
    });
  });
});
