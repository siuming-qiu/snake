class Snake {
  element: HTMLElement;
  head: HTMLElement;
  body: HTMLCollection;
  constructor() {
    this.element = document.querySelector(".snake")!;
    this.head = this.element.firstElementChild as HTMLElement;
    this.body = this.element.getElementsByTagName("div");
  }
  get() {
    return [this.head.offsetLeft, this.head.offsetTop];
  }
  set(x: Number, y: Number) {
    if (x < 0 || x > 290 || y < 0 || y > 290) {
      throw new Error("撞墙了");
    }
    this.move();
    [this.head.style.left, this.head.style.top] = [`${x}px`, `${y}px`];
    this.isTouch();
  }
  add() {
    const div: HTMLElement = document.createElement("div");
    this.element.appendChild(div);
  }
  move() {
    for (let i = this.body.length - 1; i > 0; i--) {
      const [x, y] = [
        (this.body[i - 1] as HTMLElement).offsetLeft,
        (this.body[i - 1] as HTMLElement).offsetTop,
      ];
      [
        (this.body[i] as HTMLElement).style.left,
        (this.body[i] as HTMLElement).style.top,
      ] = [`${x}px`, `${y}px`];
    }
  }
  isTouch() {
    let [x, y] = this.get();
    for (let i = 1; i < this.body.length; i++) {
      if (
        x === (this.body[i] as HTMLElement).offsetLeft &&
        y === (this.body[i] as HTMLElement).offsetTop
      )
        throw new Error("撞到自己了")
    }
  }
}
export default Snake;
