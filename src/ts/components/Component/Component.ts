abstract class Component {
  protected element: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    tagName: string,
    className: string,
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  public render() {
    this.parentElement.appendChild(this.element);
    this.populate();
  }

  protected abstract populate(): void;
}


export default Component;
