import { createObj, copyObj, destrObj } from "./h4";

describe("Homework_4", () => {
  it("check1", () => {
    jest.spyOn(window, "prompt").mockReturnValue("39");
    const obj = createObj();
    expect(obj.age).not.toBeUndefined();
    expect(obj.age).toBe(39);
  });
  it("check2", () => {
    const obj = copyObj();
    expect(obj.role).not.toBeUndefined();
    expect(obj.role).toBe("admin");
  });
  it("check3", () => {
    jest.spyOn(window, "prompt").mockReturnValue("39");
    const obj = destrObj();
    expect(obj).toEqual(["John", 39, "admin"]);
  });
});
