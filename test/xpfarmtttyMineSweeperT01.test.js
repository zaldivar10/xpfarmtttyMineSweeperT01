const mineSweeper01 = require('../src/xpfarmtttyMineSweeperT01.js').mineSweeper01;
const createGameBoard = require('../src/xpfarmtttyMineSweeperT01.js').createGameBoard;
const captureSquareSelection = require('../src/xpfarmtttyMineSweeperT01.js').captureSquareSelection;
const displaySquareValue = require('../src/xpfarmtttyMineSweeperT01.js').displaySquareValue;
const isGameOver = require('../src/xpfarmtttyMineSweeperT01.js').isGameOver;

describe('UAT Scenario 1: Game Board Creation', () => {
    it('Game Board 3x3 is properly created', () => {
        let definedGameBoard = [
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+', 
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+'
        ];

        expect(createGameBoard()).toEqual(definedGameBoard);
    })  
});

describe('UAT Scenario 2: Game Over', () => {
    it('Game is Over when Stepping on a bomb on 1;1', () => {
            let definedGameBoard = [
            '+','-','+','-','+','-','+',
            '|','2','|','2','|','1','|',
            '+','-','+','-','+','-','+',
            '|','X','|','X','|','2','|',
            '+','-','+','-','+','-','+', 
            '|','3','|','X','|','2','|',
            '+','-','+','-','+','-','+'
        ];
            let currentGameBoard = [
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+', 
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+'
            ];
            let markBomb = false;
            let selectedSquares = "1;1";
            let gameoverMessage = "BOOM! – Game Over.";

        expect(mineSweeper01(definedGameBoard, currentGameBoard, selectedSquares, markBomb)).toEqual(gameoverMessage);
    })

})

describe('UAT Scenario 3: Clean square 0;0 and get the number of bombs around', function() {
    it('Clean square 0;0 and get the number of bombs (3) around', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|','3','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareSelection = "0;0";
        let numberOfBombsAround = "3";
        let markBomb = false;
        let unitTest = true;

        expect(displaySquareValue(definedGameBoard, squareSelection, markBomb, unitTest)).toEqual(numberOfBombsAround);
    })

})


describe('UAT Scenario 4: Mark the bombs around', function() {
    it('Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|','2','|','2','|','1','|',
        '+','-','+','-','+','-','+',
        '|','X','|','X','|','2','|',
        '+','-','+','-','+','-','+', 
        '|','3','|','X','|','2','|',
        '+','-','+','-','+','-','+'];
        let currentGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|','3','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let expectedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|','*','|','*','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|','3','|','*','|',' ','|',
        '+','-','+','-','+','-','+'];
        let selectedSquares = "1;0 + 1;1 + 0;1";
        let markBomb = true;

        expect(mineSweeper01(definedGameBoard, currentGameBoard, selectedSquares, markBomb)).toEqual(expectedGameBoard);
    })
})

describe('UAT Scenario 5: Game Victory', function() {
    it('Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2]', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|','2','|','2','|','1','|',
        '+','-','+','-','+','-','+',
        '|','X','|','X','|','2','|',
        '+','-','+','-','+','-','+', 
        '|','3','|','X','|','2','|',
        '+','-','+','-','+','-','+'];
        let currentGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|','*','|','*','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|','3','|','*','|',' ','|',
        '+','-','+','-','+','-','+'];
        let selectedSquares = "0;0 + 2;0 + 2;1 + 2;2 + 1;2 + 0;2";
        let markBomb = false;
        let victoryMessage = "the land is cleared! GOOD JOB!";

        expect(mineSweeper01(definedGameBoard, currentGameBoard, selectedSquares, markBomb)).toEqual(victoryMessage);
    })
})


describe('Unit Tests', function() {
    it('Capture square selection "1;1" = 24', () => {
        let squareSelection = "1;1";
        let squarePosition = 24;

        expect(captureSquareSelection(squareSelection)).toEqual(squarePosition);
    })
    it('Display square value', () => {
        let definedgameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareSelection = "1;1";
        let squareValue = "X";
        let markBomb = false;

        expect(displaySquareValue(definedgameBoard, squareSelection, markBomb)).toEqual(squareValue);
    })
    it('Check for Game Over using selection vs bomb position in board, square contains a bomb', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareValue = "X";
        let gameOver = true;

        expect(isGameOver(squareValue)).toEqual(gameOver);
    })
    it('Check for Game Over using selection vs bomb position in board, square does not contain a bomb', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareValue = " ";
        let gameOver = false;

        expect(isGameOver(squareValue)).toEqual(gameOver);
    })
    it('Display square selection (when marking bomb around)', () => {
        let definedGameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','X','+','X','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','3','+','X','+','-','+'];
        let squareSelection = "1;0";
        let squareValue = "*";
        let markBomb = true;

        expect(displaySquareValue(definedGameBoard, squareSelection, markBomb)).toEqual(squareValue);
    })

})
