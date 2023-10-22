import Button from "./Button";

describe("Given component Button",()=>{
  describe("When is recive a function and is clicked",()=>{
    test("It call the function",()=>{
      const greenScreen=document.createElement("div");
      const dummyfunction=jest.fn();
      const button=new Button(greenScreen,"button",{method:dummyfunction});
      
      button.render();
      (greenScreen.querySelector(".button") as HTMLButtonElement).click();
      
      expect(dummyfunction).toHaveBeenCalled();
    })
  })
})
