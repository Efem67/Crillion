import { GameBoard } from "./GameBoard";
import { Levels } from "./Levels";
import { Menu } from "./Menu";
export class Ball {
    xPos: number;
    yPos: number;
    dx: number;
    dy: number;
    speed: number;
    radius: number;
    ctx: any;
    canvas: HTMLCanvasElement;
    direction: string = 'none'
    execute: boolean = false;
    keys: any = {};
    ballColor: string;
    frame: any;
    isAlive = true;
    blockExpl: boolean = false;
    explIteration: number = 1;
    explX: number = 0;
    explY: number = 0;
    soundCount: number = 0;


    constructor(x: number, y: number, radius: number, ctx: any, speed: number, canvas: HTMLCanvasElement, ballColor: string) {
        this.xPos = x;
        this.yPos = y;
        this.speed = speed;
        this.radius = radius;
        this.ctx = ctx;
        this.canvas = canvas;
        this.dx = 0.7 * this.speed;
        this.dy = 0.7 * this.speed;
        this.ballColor = ballColor

        this.drawBall()
        this.updateBall()

        document.addEventListener("keydown", (event) => {
            this.keys[event.key] = true;
        });
        document.addEventListener("keyup", (event) => {
            delete this.keys[event.key];
            this.direction = 'none'
            this.execute = false;
        });

        this.checkKey()

    }


    killEffect = () => {
        clearInterval(GameBoard.interval)
    }

    checkKey = async () => {
        console.log(this.xPos, this.yPos)
        if (Object.keys(this.keys)[0] == "o") {
            // var snd = new Audio("../public/sounds/Reset.m4a"); 
            // snd.play();

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.refresh()

            const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);
            for (let i = 1; i < interval_id; i++) window.clearInterval(i);

            let x = setInterval(() => {
                if (this.explIteration < 6) {
                    this.refresh()
                    let img = document.getElementById(`explosions/ball/${this.explIteration}.png`);
                    this.ctx.drawImage(img, Menu.ballX - 7, Menu.ballY - 7, 65, 65);
                    this.explIteration += 1;

                }
                //KONIEC GRY
                else {
                    this.explIteration = 1;
                    this.ctx.clearRect(this.xPos - 7, this.yPos - 7, 65, 65);
                    clearInterval(x)
                    this.refresh()
                }

            },
                45);



            this.isAlive = false;
            this.killEffect()
            await this.sleep(3000);


            document.getElementById('mainContainer')!.style.visibility = 'hidden'
            GameBoard.blocksArr = []

            if (GameBoard.livesNuber > 0) {
                let lives: number = GameBoard.livesNuber - 1
                Menu.currGame = undefined
                document.getElementById('mainContainer')!.style.visibility = 'visible'
                Menu.makeAgain(lives, GameBoard.levelNum, GameBoard.score, GameBoard.best)

            }
            else {
                document.getElementById('mainContainer')!.style.display = 'none'
                let divek = document.createElement('div') as HTMLDivElement;
                let scoreDiv = document.getElementById('scoreBoardDiv') as HTMLDivElement
                divek.className = 'gameOver';
                let pic = document.createElement('img') as HTMLImageElement;
                pic.src = '../public/grafiki/baners/gameOver.png'
                pic.style.width = '200px'
                pic.style.height = '40px'
                divek.appendChild(pic)
                document.getElementById('allDiv')!.innerHTML = "";
                document.getElementById('allDiv')?.appendChild(divek)
                document.getElementById('allDiv')?.appendChild(scoreDiv)
            }

        }

        if (Object.keys(this.keys)[0] == "ArrowRight") {
            this.direction = 'right'
            if (this.dx < 0) {
                this.dx = -this.dx
            }

        }

        if (Object.keys(this.keys)[0] == "ArrowLeft") {
            this.direction = 'left'
            if (this.dx > 0) {

                this.dx = -this.dx
            }


        }

        setTimeout(this.checkKey, 10);
    }
    scoreInterval() {
        let currScore = GameBoard.score
        let xd = setInterval(() => {
            GameBoard.score += 1;
            GameBoard.loadGameScore()
            if (GameBoard.score >= currScore + GameBoard.bonus) {
                clearInterval(xd)
                GameBoard.loadGameScore()
            }
        }, 10);
    }

    bestInterval() {
        let currBest = GameBoard.best
        let xd = setInterval(() => {
            GameBoard.best += 1;
            GameBoard.loadGameScore()
            if (GameBoard.best >= currBest + GameBoard.bonus) {
                clearInterval(xd)
                GameBoard.loadGameScore()
            }
        }, 10);
    }

    win = async () => {
        ('wygrana')

        clearTimeout(this.frame)
        this.killEffect()
        this.scoreInterval()
        this.bestInterval()
        await this.sleep(10000);
        const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);
        for (let i = 1; i < interval_id; i++) window.clearInterval(i);

        document.getElementById('mainContainer')!.style.visibility = 'hidden'
        GameBoard.blocksArr = []
        Menu.makeAgain(GameBoard.livesNuber + 1, GameBoard.levelNum + 1, GameBoard.best, GameBoard.score)
        document.getElementById('mainContainer')!.style.visibility = 'visible'


    }

    showExplosion = (blockId: number) => {
        const block = GameBoard.blocksArr.find((el: any) => el.id == blockId);

        let x = setInterval(() => {
            if (block.explIteration < 6) {
                block.type = `explBlock${block.explIteration}`
                block.explIteration += 1;
            }
            else {
                // var snd = new Audio("../public/sounds/Trah.m4a"); // buffers automatically when created
                // snd.play();
                let arr = GameBoard.blocksArr.filter((el: any) => {
                    return (el.xPos != block.xPos || el.yPos != block.yPos)
                })
                GameBoard.blocksArr = arr
                this.ctx.clearRect(block.xPos, block.yPos, block.dimension, block.dimension);
                clearInterval(x)
                GameBoard.score += 50;
                GameBoard.best += 50;
                GameBoard.loadGameScore()
                let countOfBlocks = GameBoard.blocksArr.filter((el: any) => {
                    return (el.type).charAt(1) == 'N'
                }).length
                if (countOfBlocks <= 0) {
                    this.win()
                }
            }

        },
            40);
    }

    sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    collisionEffect = async (currBlock: any) => {
        // @ts-ignore
        let blockColor: string = Levels.dictionary[currBlock.type].split('/')[1]
        let ballColor: string = this.ballColor.split('/').pop()?.split('.')[0]!
        if ((currBlock.type).charAt(1) == 'C') {

            this.ballColor = 'balls/full/' + blockColor + '.png'

        }
        if ((currBlock.type).charAt(1) == 'N') {

            if (blockColor == ballColor) {
                currBlock.type = 'explBall1'
                currBlock.state = 'explosion'
                this.showExplosion(currBlock.id)
            }
        }

        if ((currBlock.type).charAt(1) == 'D') {
            // var snd = new Audio("../public/sounds/Bum.m4a");
            // snd.play();
            this.isAlive = false;
            this.killEffect()
            await this.sleep(3000);
            document.getElementById('mainContainer')!.style.visibility = 'hidden'
            GameBoard.blocksArr = []

            if (GameBoard.livesNuber > 0) {
                let lives: number = GameBoard.livesNuber - 1
                Menu.currGame = null
                document.getElementById('mainContainer')!.style.visibility = 'visible'
                Menu.makeAgain(lives, GameBoard.levelNum, GameBoard.score, GameBoard.best)

            }
            else {
                document.getElementById('mainContainer')!.style.display = 'none'
                let divek = document.createElement('div') as HTMLDivElement;
                let scoreDiv = document.getElementById('scoreBoardDiv') as HTMLDivElement
                divek.className = 'gameOver';
                let pic = document.createElement('img') as HTMLImageElement;
                pic.src = '../public/grafiki/baners/gameOver.png'
                pic.style.width = '200px'
                pic.style.height = '40px'
                divek.appendChild(pic)
                document.getElementById('allDiv')!.innerHTML = "";
                document.getElementById('allDiv')?.appendChild(divek)
                document.getElementById('allDiv')?.appendChild(scoreDiv)
            }
        }

        if ((currBlock.type).charAt(1) == 'M') {

            // console.log('ff')
            if (blockColor != ballColor) return;
            let directionArr: any = {
                left: { x: 1, y: 0 },
                right: { x: -1, y: 0 },
                up: { x: 0, y: 1 },
                down: { x: 0, y: -1 }
            }
            let x = directionArr[currBlock.hitFrom].x
            let y = directionArr[currBlock.hitFrom].y
            let exist = false;
            GameBoard.blocksArr.forEach((el: any) => {

                if (el.xPos == (currBlock.xPos + x * currBlock.dimension) && el.yPos == (currBlock.yPos + y * currBlock.dimension)) {
                    exist = true
                }

            })
            let ultimatelyCoords = {
                x: (currBlock.xPos + x * currBlock.dimension),
                y: (currBlock.yPos + y * currBlock.dimension)
            }
            if (ultimatelyCoords.x < 0 || ultimatelyCoords.y < 0) {
                currBlock.hitFrom = '';
                currBlock.isMoving = false;
                return;
            }

            if (ultimatelyCoords.x + currBlock.dimension > this.canvas.width || ultimatelyCoords.y + currBlock.dimension > this.canvas.height) {
                currBlock.hitFrom = '';
                currBlock.isMoving = false;
                return;
            }
            if (!exist) currBlock.isMoving = true;


            if (!exist && currBlock.isMoving) {
                // var snd = new Audio("../public/sounds/Szur.m4a");
                // snd.play();
                let inter = setInterval(() => {
                    currBlock.yPos += y * 5;
                    currBlock.xPos += x * 5;

                    if (currBlock.xPos == ultimatelyCoords.x && currBlock.yPos == ultimatelyCoords.y) {
                        currBlock.hitFrom = ''
                        currBlock.isMoving = false;

                        clearInterval(inter)
                    }
                },
                    12);

            }

        }

    }

    getDistance(x1: number, y1: number, x2: number, y2: number) {
        let xDistance: number = x2 - x1;
        let yDistance: number = y2 - y1;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    refresh = () => {
        GameBoard.blocksArr.forEach((el: any) => {
            this.ctx.fillRect(el.xPos + (1 / 5) * el.dimension, el.yPos + (1 / 5) * el.dimension, el.dimension, el.dimension);
        })

        GameBoard.blocksArr.forEach((el: any) => {
            //@ts-ignore
            let img = document.getElementById(Levels.dictionary[el.type]);
            this.ctx.drawImage(img, el.xPos, el.yPos, el.dimension, el.dimension);
        })
    }

    updateBall = () => {
        if (this.soundCount == 115) {
            // var snd = new Audio("../public/sounds/Syczenie.m4a");
            // snd.play();
            this.soundCount = 0;
        } else {
            this.soundCount += 1;
        }

        this.frame = setTimeout(this.updateBall, 11);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.refresh()

        if (this.isAlive) {
            this.drawBall()
        }
        else {
            clearTimeout(this.frame)
            let x = setInterval(() => {
                if (this.explIteration < 6) {
                    this.refresh()
                    let img = document.getElementById(`explosions/ball/${this.explIteration}.png`);
                    this.ctx.drawImage(img, this.explX - 7, this.explY - 7, 65, 65);
                    this.explIteration += 1;

                }
                //KONIEC GRY
                else {
                    this.ctx.clearRect(this.explX - 7, this.explY - 7, 65, 65);
                    clearInterval(x)
                    this.refresh()
                }

            },
                55);

        }


        if (this.direction != 'none' && (this.xPos - this.radius) < 0) {
            this.dx = -this.dx
        }

        if (this.direction != 'none' && (this.radius + this.xPos) > this.canvas.width) {
            this.dx = -this.dx
        }

        if ((this.yPos + this.radius) > this.canvas.height || (this.yPos - this.radius) < 0) {
            this.dy = -this.dy
        }

        if (this.direction != "none") {
            if ((this.xPos + this.dx + this.radius) > this.canvas.width) this.xPos = this.xPos - this.radius
            else if ((this.xPos - this.radius) < (1 / 2) * this.radius) { this.xPos = this.xPos + this.radius }
            else
                this.xPos += this.dx;
        }


        GameBoard.blocksArr.forEach((el: any) => {
            if (el.state == 'block') {
                let circle = { x: this.xPos, y: this.yPos, r: this.radius }
                let rect = { x: el.xPos, y: el.yPos, w: el.dimension, h: el.dimension }
                let isCollision = this.RectCircleColliding(circle, rect, el.id)

                if (isCollision && !el.isMoving) {
                    this.explX = el.xPos;
                    this.explY = el.yPos;
                    this.collisionEffect(el)
                }
            }



        })
        this.yPos += this.dy * 1;
    }


    RectCircleColliding(circle: any, rect: any, blockID: string) {
        const block = GameBoard.blocksArr.find((el: any) => el.id == blockID);

        var distX = Math.abs(circle.x - rect.x - rect.w / 2);
        var distY = Math.abs(circle.y - rect.y - rect.h / 2);

        if (distX > (rect.w / 2 + circle.r)) { return false; }
        if (distY > (rect.h / 2 + circle.r)) { return false; }

        if (distX <= (rect.w / 2)) {
            if (this.yPos > rect.y) {
                block.hitFrom = 'down'
            } else if (this.yPos < rect.y) {
                block.hitFrom = 'up'
            }
            //OD GÓRY I OD DOŁU
            this.dy = -this.dy
            this.yPos += this.dy * 1;
            return true;
        }
        if (distY <= (rect.h / 2)) {
            //OD BOKU
            if (this.xPos > rect.x) {
                block.hitFrom = 'right'
            } else if (this.xPos < rect.x) {
                block.hitFrom = 'left'
            }

            this.dx = -this.dx
            this.xPos += this.dx * 4;

            return true;
        }

        var dx = distX - rect.w / 2;
        var dy = distY - rect.h / 2;
        if (dx * dx + dy * dy <= (circle.r * circle.r)) {

            this.dx = -this.dx

            if (rect.x > this.xPos) {
                if (this.xPos + this.radius + this.dx >= rect.x) {
                    if (this.dy < 0) {
                        if (this.yPos + this.radius > rect.y) {
                            block.hitFrom = 'down'
                            this.dy = -this.dy
                        }

                    } else {
                        if (this.yPos + this.radius < rect.y + rect.h) {
                            block.hitFrom = 'up'
                            this.dy = -this.dy
                        }
                    }

                }
            } else if (rect.w + rect.x < this.xPos + this.radius) {
                if ((this.xPos - this.radius) + this.dx <= rect.x + rect.w) {
                    if (this.dy < 0) {
                        if (this.yPos + this.radius + this.dx > rect.y) {
                            block.hitFrom = 'down'
                            this.dy = -this.dy
                        }
                    } else {
                        if (this.yPos + this.radius + this.dx < rect.y + rect.h) {
                            block.hitFrom = 'up'
                            this.dy = -this.dy
                        }
                    }
                }

            }

            this.yPos += this.dy * 2.5;
            this.xPos += this.dx * 2.5;

            return true;
        }

    }

    drawBall() {

        let img = document.getElementById(this.ballColor);

        this.ctx.save()
        this.ctx.beginPath()
        Menu.ballX = this.xPos;
        Menu.ballY = this.yPos;

        this.ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, false);

        this.ctx.drawImage(img, this.xPos - 12.5, this.yPos - 12.5, 25, 25)
        this.ctx.restore()

    }

}