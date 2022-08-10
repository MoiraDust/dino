export default class Obstacle {
    obstacle: HTMLElement;

    constructor() {
        this.obstacle = document.getElementById("obstacle")!;
    }

    get obsClass() {
        return this.obstacle.classList;
    }

    get obsLeft() {
        // return this.obstacle.offsetLeft;
        return parseInt(window.getComputedStyle(this.obstacle).getPropertyValue("left"));
    }
}