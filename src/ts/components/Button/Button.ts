import Component from "../Component/Component";
import { ButtonInfo } from "../../type";

class Button extends Component {
  innerHtml;
  method;

  constructor(parentElement:HTMLElement,classname:string,buttonInfo:ButtonInfo) {
    super(parentElement,"button",classname)
    this.innerHtml=buttonInfo.innerHtml;
    this.method=buttonInfo.method;
  }

  protected populate(): void {
    this.element.addEventListener("click",this.method);
    this.element.innerHTML=this.innerHtml?this.innerHtml:"";
  }
}

export default Button;
