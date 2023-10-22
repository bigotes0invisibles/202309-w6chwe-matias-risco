import Button from "./Button.js";

describe("Given component Button", () => {
  describe("When is recive a function and is clicked", () => {
    test("It call the function", () => {
      const greenScreen = document.createElement("div") as HTMLElement;
      const dummyfunction = jest.fn();
      const button = new Button(greenScreen, "button", {
        method: dummyfunction,
        innerHtml: "send",
      });

      button.render();
      const buttonElemnt = greenScreen.querySelector(".button")!;
      (buttonElemnt as HTMLButtonElement).click();

      expect(dummyfunction).toHaveBeenCalled();
    });
  });
});
