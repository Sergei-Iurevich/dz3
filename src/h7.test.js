import { createUI } from "./h7";

describe("Homework_7", () => {
  describe("task1", () => {
    let el;
    let input;
    let button;
    let arrayTagP;
    beforeEach(() => {
      el = document.createElement("div");
      createUI(el);
      input = el.querySelector("input");
      button = el.querySelector("button");
      arrayTagP = el.querySelectorAll("p");
    });

    function clickButton(strValue) {
      input.value = strValue;
      const eventInput = new Event("input");
      input.dispatchEvent(eventInput);
      const eventClick = new Event("click");
      button.dispatchEvent(eventClick);
    }

    it("is a function", () => {
      expect(typeof createUI).toBe("function");
    });

    it("create proper markup", () => {
      expect(input).toBeTruthy();
      expect(button).toBeTruthy();
      expect(arrayTagP.length).toBe(3);
    });
    it("At first the button is hidden", () => {
      expect(button.hidden).toBe(true);
    });

    it("the button is not hidden", () => {
      input.value = "4";
      const event = new Event("input");
      input.dispatchEvent(event);
      expect(button.hidden).toBe(false);
    });

    it("Again the button is not hidden", () => {
      input.value = "";
      const event = new Event("input");
      input.dispatchEvent(event);
      expect(button.hidden).toBe(true);
    });

    it("If click on the button then a new paragraph is added", () => {
      clickButton("text");
      arrayTagP = el.querySelectorAll("p");
      expect(arrayTagP.length).toBe(4);
      expect(arrayTagP[arrayTagP.length - 1].innerText).toBe("text");
    });

    it("old paragraphs are deleted", () => {
      for (let i = 0; i < 100; i++) {
        clickButton("word");
      }
      arrayTagP = el.querySelectorAll("p");
      expect(arrayTagP.length).toBe(5);
    });
  });
});
