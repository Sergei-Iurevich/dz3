import { task1, task2, task3 } from "./h4";

describe("Homework_4", () => {
  it("check1", () => {
    jest.spyOn(window, "prompt").mockReturnValue("39");
    const obj = task1();
    // eslint-disable-next-line no-prototype-builtins
    const z = obj.hasOwnProperty("age");
    expect(z).toBeTruthy();
    expect(obj.age).toBe(39);
  });
  it("check2", () => {
    jest.spyOn(window, "prompt").mockReturnValue("39");
    const obj = task2();
    // eslint-disable-next-line no-prototype-builtins
    const z = obj.hasOwnProperty("role");
    expect(z).toBeTruthy();
    expect(obj.role).toBe("admin");
  });
  it("check3", () => {
    jest.spyOn(window, "prompt").mockReturnValue("39");
    const obj = task3();
    expect(obj[0]).toBe("John");
    expect(obj[1]).toBe(39);
    expect(obj[2]).toBe("admin");
  });
});
