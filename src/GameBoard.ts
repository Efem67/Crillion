// @ts-nocheck
import { Ball } from "./Ball";
import { Block } from "./Block";
import { Levels } from "./Levels";

export class GameBoard {
    static blocksArr: any = [];
    currentLevel: Array<Array<string>>;
    ballX: number;
    ballY: number;
    ballColor: string;
    static levelNum: number;
    static livesNuber: number;
    static score: number;
    static best: number;
    static bonus: number;
    static interval: any;

    constructor(currentLevel: Array<Array<string>>, ballX: number, ballY: number, levelNum: number, livesNuber: number, score: number, best: number, bonus: number, ballColor: string) {
        this.currentLevel = currentLevel;
        this.ballX = ballX;
        this.ballY = ballY;
        this.ballColor = ballColor

        GameBoard.levelNum = levelNum;
        GameBoard.livesNuber = livesNuber;
        GameBoard.score = score;
        GameBoard.best = best;
        GameBoard.bonus = bonus;
        this.renderGraphics()


    }

    static bonusInterval() {
        GameBoard.interval = setInterval(() => {
            GameBoard.bonus -= 1;
            GameBoard.loadGameScore()
            if (GameBoard.bonus < 0) {
                clearInterval(GameBoard.interval)
                GameBoard.bonus = 0
                GameBoard.loadGameScore()
            }
        }, 100);
    }
    static loadGameScore() {
        let scoreDiv = document.getElementById('score') as HTMLElement;
        let bestDiv = document.getElementById('best') as HTMLElement;
        let levelDiv = document.getElementById('level') as HTMLElement;
        let livesDiv = document.getElementById('lives') as HTMLElement;
        let blocksDiv = document.getElementById('blocks') as HTMLElement;
        let bonusDiv = document.getElementById('bonus') as HTMLElement;

        livesDiv.innerHTML = ""
        let livesImg = document.createElement('img')
        livesImg.src = `../public/grafiki/numbers/${this.livesNuber}.png`
        livesImg.style.width = "20px"
        livesImg.style.height = "20px"
        livesDiv.appendChild(livesImg)

        levelDiv.innerHTML = ""
        let levelImg = document.createElement('img')
        levelImg.src = `../public/grafiki/numbers/${this.levelNum}.png`
        levelImg.style.width = "20px"
        levelImg.style.height = "20px"
        levelDiv.appendChild(levelImg)



        let countOfBlocks = GameBoard.blocksArr.filter((el: any) => {
            return (el.type).charAt(1) == 'N'
        }).length.toString()
        blocksDiv.innerHTML = ""
        for (let i = 0; i < countOfBlocks.length; i++) {
            let blocksImg = document.createElement('img')
            blocksImg.src = `../public/grafiki/numbers/${countOfBlocks[i]}.png`
            blocksImg.style.width = "20px"
            blocksImg.style.height = "20px"
            blocksDiv.appendChild(blocksImg)
        }



        bonusDiv.innerHTML = ""
        for (let i = 0; i < GameBoard.bonus.toString().length; i++) {
            let bonusImg = document.createElement('img')
            bonusImg.src = `../public/grafiki/numbers/${GameBoard.bonus.toString()[i]}.png`
            bonusImg.style.width = "20px"
            bonusImg.style.height = "20px"
            bonusDiv.appendChild(bonusImg)
        }

        scoreDiv.innerHTML = ""
        for (let i = 0; i < GameBoard.score.toString().length; i++) {
            let scoreImg = document.createElement('img')
            scoreImg.src = `../public/grafiki/numbers/${GameBoard.score.toString()[i]}.png`
            scoreImg.style.width = "20px"
            scoreImg.style.height = "20px"
            scoreDiv.appendChild(scoreImg)
        }


        bestDiv.innerHTML = ""
        for (let i = 0; i < GameBoard.best.toString().length; i++) {
            let bestImg = document.createElement('img')
            bestImg.src = `../public/grafiki/numbers/${GameBoard.best.toString()[i]}.png`
            bestImg.style.width = "20px"
            bestImg.style.height = "20px"
            bestDiv.appendChild(bestImg)
        }

    }
    renderGraphics() {

        let div = document.getElementById('forPics')
        div?.innerHTML = ""
        Object.keys(Levels.dictionary).forEach((key, index) => {
            let image: HTMLElement;
            if (!document.getElementById(Levels.dictionary[key])) {
                image = document.createElement('img')
                image.src = "../public/grafiki/" + Levels.dictionary[key];
                image.id = Levels.dictionary[key];
                image.style.display = "none";
                div.appendChild(image)
            }

            if (index + 1 == Object.keys(Levels.dictionary).length) {
                image.onload = () => this.create()
            }


        })
    }

    create() {
        const canvas: any = document.getElementById("gameBoard");
        const ctx = canvas.getContext("2d");

        let gameBoardHeight: number = 550;
        let gameBoardWidth: number = 750;
        let blockDimension: number = 50;

        canvas.height = gameBoardHeight;
        canvas.width = gameBoardWidth;

        let currentHeight = 0;
        let img = document.getElementById("backGroundImage");
        ctx.drawImage(img, 0, 0, gameBoardWidth, gameBoardHeight);
        // 
        let ball: any = new Ball(this.ballX, this.ballY, 12, ctx, 5, canvas, this.ballColor)
        for (let i: number = 0; i < 11; i++) {
            let currentWidth = 0;
            for (let j: number = 0; j < 15; j++) {


                if (this.currentLevel[i][j] != '0') {
                    let block: any = new Block(currentWidth, currentHeight, this.currentLevel[i][j], blockDimension, ctx, this.ballColor)
                    GameBoard.blocksArr.push(block)
                }


                currentWidth += blockDimension;
            }
            currentHeight += blockDimension;
        }
        GameBoard.loadGameScore();
        GameBoard.bonusInterval()
    }

}