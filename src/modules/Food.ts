class Food {
    element: HTMLElement;
    top: Number = 30;
    left: Number = 40;
    constructor() {
        this.element = document.querySelector('.food')!
        this.element.style.transform = `translate(${this.left}px,${this.top}px)`
    }
    get() {
        return [this.left, this.top]
    }
    change() {
        this.top = Math.round(Math.random() * 29) * 10
        this.left = Math.round(Math.random() * 29) * 10
        this.element.style.transform = `translate(${this.left}px,${this.top}px)`
    }
}
export default Food
