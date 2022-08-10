import Dino from './Dino'
import Obstacle from "./Obstacle";

export default class GameController{
    dino: Dino;
    obstacle: Obstacle;
    constructor() {
        this.dino = new Dino();
        this.obstacle = new Obstacle();
        //init game
        this.init();
    }
    init(){
        document.addEventListener('keydown', this.keydownHandler.bind(this));
    }
    keydownHandler(event:KeyboardEvent){
        //jump: event.code = Space  || event.key === ' '
        console.log(event.code);
        if(event.code === 'Space' || event.key === ' '){
            this.jump();
            this.obsMove();
        }
    }
    //jump
    jump(){
        console.log("jump");
        const dinoClassList = this.dino.dinoClass;
        const dino = this.dino;
        const obs = this.obstacle;
        //press space very quickly
        // @ts-ignore
        if(dinoClassList != "jump"){
            dinoClassList.add("jump");
            setTimeout(this.stopJump.bind(this),300);
            //if alive
            setInterval(this.isAlive.bind(this),10);
        }
    }
    //stop jump
    stopJump(){
        const dinoClassList = this.dino.dinoClass;
        dinoClassList.remove("jump");
    }
    //obstacle move
    obsMove(){
        const obsClassList = this.obstacle.obsClass;
        obsClassList.add("move");
    }
    //stop move
    stopObsMove(){
        const obsClassList = this.obstacle.obsClass;
        obsClassList.remove("move");
    }
    isAlive(){
        //get position of dino and obst
        const dinoTop = this.dino.dinoTop;
        const obsLeft = this.obstacle.obsLeft;
        //is live
        if(obsLeft <= 40 && obsLeft >=0 && dinoTop >= 140){
            console.log("gg");
            alert("game over");
            this.stopObsMove();
        }
    }
}