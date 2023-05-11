export class Levels {

    static dictionary = {
        pN: 'blocks/purple/block.png',
        bN: 'blocks/blue/block.png',
        cN: 'blocks/cyan/block.png',
        gN: 'blocks/green/block.png',
        rN: 'blocks/red/block.png',
        yN: 'blocks/yellow/block.png',

        pC: 'blocks/purple/changeColorBlock.png',
        bC: 'blocks/blue/changeColorBlock.png',
        cC: 'blocks/cyan/changeColorBlock.png',
        gC: 'blocks/green/changeColorBlock.png',
        rC: 'blocks/red/changeColorBlock.png',
        yC: 'blocks/yellow/changeColorBlock.png',

        pM: 'blocks/purple/moveBlock.png',
        bM: 'blocks/blue/moveBlock.png',
        cM: 'blocks/cyan/moveBlock.png',
        gM: 'blocks/green/moveBlock.png',
        rM: 'blocks/red/moveBlock.png',
        yM: 'blocks/yellow/moveBlock.png',

        dD: 'blocks/deadthBlock.png',
        sB: 'blocks/stonebrickBlock.png',

        smashBlueBall: 'balls/smashed/blue.png',
        smashCyanBall: 'balls/smashed/cyan.png',
        smashGreenBall: 'balls/smashed/green.png',
        smashPurpleBall: 'balls/smashed/purple.png',
        smashRedBall: 'balls/smashed/red.png',
        smashYellowBall: 'balls/smashed/yellow.png',

        fullBlueBall: 'balls/full/blue.png',
        fullCyanBall: 'balls/full/cyan.png',
        fullGreenBall: 'balls/full/green.png',
        fullPurpleBall: 'balls/full/purple.png',
        fullRedBall: 'balls/full/red.png',
        fullYellowBall: 'balls/full/yellow.png',

        explBlock1: 'explosions/block/1.png',
        explBlock2: 'explosions/block/2.png',
        explBlock3: 'explosions/block/3.png',
        explBlock4: 'explosions/block/4.png',
        explBlock5: 'explosions/block/5.png',


        explBall1: 'explosions/ball/1.png',
        explBall2: 'explosions/ball/2.png',
        explBall3: 'explosions/ball/3.png',
        explBall4: 'explosions/ball/4.png',
        explBall5: 'explosions/ball/5.png',

        number0: 'numbers/0.png',
        number1: 'numbers/1.png',
        number2: 'numbers/2.png',
        number3: 'numbers/3.png',
        number4: 'numbers/4.png',
        number5: 'numbers/5.png',
        number6: 'numbers/6.png',
        number7: 'numbers/7.png',
        number8: 'numbers/8.png',
        number9: 'numbers/9.png',

        best: 'baners/best.png',
        blocks: 'baners/blocks.png',
        bonus: 'baners/bonus.png',
        level: 'baners/level.png',
        levelStart: 'baners/levelStart.png',
        lives: 'baners/lives.png',
        score: 'baners/score.png',
        titleBaner: 'baners/titleBaner.png',

    }
    static level1BallColor: string = 'balls/full/blue.png';
    static level1Ball = { x: 17, y: 17 }
    static level1: Array<Array<string>> = [
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', 'bN', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', 'bN', 'bN', 'bN', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', 'pN', 'pN', 'pN', 'pN', 'pN', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pC', '0', '0', '0', '0'],
        ['0', '0', '0', 'dD', 'dD', 'dD', 'dD', 'dD', 'dD', 'dD', 'dD', 'dD', '0', '0', '0'],
        ['0', '0', '0', '0', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', 'pN', 'pN', 'pN', 'pN', 'pN', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', 'bN', 'bN', 'bN', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', 'bN', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ]

    static levelEmpty: Array<Array<string>> = [
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', 'bN', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ]

    static level2BallColor: string = 'balls/full/blue.png';
    static level2Ball = { x: 17, y: 17 }
    static level2: Array<Array<string>> = [
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'rM', '0'],
        ['0', 'pC', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', 'rN', '0'],
        ['0', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'pM', '0'],
        ['0', 'bC', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', 'pN', '0'],
        ['0', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', 'sB', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', 'rC', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', 'bN', '0'],
        ['0', 'sB', 'sB', 'dD', 'sB', 'sB', 'dD', 'sB', 'sB', 'dD', 'dD', 'dD', 'sB', 'sB', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ]

    static level3BallColor: string = 'balls/full/green.png';
    static level3Ball = { x: 630, y: 380 }
    static level3: Array<Array<string>> = [
        ['sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB'],
        ['0', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', '0'],
        ['sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB'],
        ['0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0'],
        ['sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB'],
        ['0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0'],
        ['sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB'],
        ['0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0', 'gM', '0'],
        ['sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB'],
        ['0', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', 'gN', 'gM', '0'],
        ['sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB', '0', 'sB'],
    ]
}