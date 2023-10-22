import Component from "../Component/Component.js";
import { type ButtonInfo } from "../../type";

class Button extends Component {
  innerHtml;
  method;

  constructor(
    parentElement: HTMLElement,
    classname: string,
    buttonInfo: ButtonInfo,
  ) {
    super(parentElement, "button", classname);
    const { innerHtml, method } = buttonInfo;
    this.innerHtml = innerHtml;
    this.method = method;
  }

  protected populate(): void {
    this.element.addEventListener("click", this.method);
    this.element.innerHTML = this.innerHtml;
  }
}

export default Button;
