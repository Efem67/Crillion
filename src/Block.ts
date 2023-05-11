import { Levels } from "./Levels";
export class Block {

    xPos: number;
    yPos: number;
    type: string;
    dimension: number;
    ctx: any;
    state: string = 'block'
    id: number = Math.random()
    explIteration: number = 1;
    hitFrom: string = '';
    isMoving: boolean = false;
    constructor(x: number, y: number, type: string, dimension: number, ctx: any) {
        this.xPos = x;
        this.yPos = y;
        this.type = type;
        this.dimension = dimension;
        this.ctx = ctx;

        this.drawBlock()
    }

    drawBlock() {
        //@ts-ignore

        let img = document.getElementById(Levels.dictionary[this.type]);
        this.ctx.drawImage(img, this.xPos, this.yPos, this.dimension, this.dimension);


    }

}




