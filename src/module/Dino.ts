class Dino{
    dino: HTMLElement;
    constructor() {
        this.dino = document.getElementById("dino")!;
    }
    get dinoClass(){
        return this.dino.classList;
    }
    get dinoTop(){
        // return this.dino.offsetTop;
        return parseInt(window.getComputedStyle(this.dino).getPropertyValue("top"));
    }
}
export default Dino;