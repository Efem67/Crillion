import { Levels } from "./Levels";
import { GameBoard } from "./GameBoard";
export class Menu {

    static currGame: any;
    static ballX: number;
    static ballY: number;

    constructor() {

        Menu.currGame = new GameBoard(Levels[`level${'1'}`], Levels[`level${1}Ball`].x, Levels[`level${1}Ball`].y, 1, 2, 0, 0, 700, Levels[`level${1}BallColor`]);
    }

    static makeAgain = (lives: number, nextLvl: number, best: number, score: number) => {

        let level = nextLvl as keyof Levels

        //@ts-ignore
        Menu.currGame = new GameBoard(Levels[`level${level}`], Levels[`level${level}Ball`].x, Levels[`level${level}Ball`].y, level, lives, score, best, 700, Levels[`level${level}BallColor`]);
    }


}



