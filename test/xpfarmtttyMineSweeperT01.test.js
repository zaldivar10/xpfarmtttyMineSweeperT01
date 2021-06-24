const mineSweeper01 = require('../src/xpfarmtttyMineSweeperT01.js').mineSweeper01;
const createGameBoard = require('../src/xpfarmtttyMineSweeperT01.js').createGameBoard;
const captureSquareSelection = require('../src/xpfarmtttyMineSweeperT01.js').captureSquareSelection;
const displaySquareValue = require('../src/xpfarmtttyMineSweeperT01.js').displaySquareValue;
const isGameOver = require('../src/xpfarmtttyMineSweeperT01.js').isGameOver;

describe('UAT Scenario 1: Game Board Creation', () => {
    it('Game Board 3x3 is properly created', () => {
        let gameBoard = ['+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+',
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+', 
            '|',' ','|',' ','|',' ','|',
            '+','-','+','-','+','-','+'];

        expect(createGameBoard()).toEqual(gameBoard);
    })  
});

describe('UAT Scenario 2: Game Over', function() {
    it('Game is Over when Stepping on a bomb on 1;1', () => {
        let squareSelection = "1;1";
        let gameMessage = "BOOM! – Game Over."

        expect(mineSweeper01()).toEqual(gameMessage);
    })

})

describe('Unit Tests', function() {
    it('Capture square selection "1;1" = 24', () => {
        let squareSelection = "1;1";
        let squarePosition = 24;

        expect(captureSquareSelection(squareSelection)).toEqual(squarePosition);
    })
    it('Display square value', () => {
        let gameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareSelection = "1;1";
        let squareValue = "X";

        expect(displaySquareValue(gameBoard, squareSelection)).toEqual(squareValue);
    })
    it('Check for Game Over using selection vs bomb position in board, square contains a bomb', () => {
        let gameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareSelection = "2;1";
        let gameOver = true;

        expect(isGameOver(gameBoard, squareSelection)).toEqual(gameOver);
    })
    it('Check for Game Over using selection vs bomb position in board, square does not contain a bomb', () => {
        let gameBoard = ['+','-','+','-','+','-','+',
        '|',' ','|','X','|',' ','|',
        '+','-','+','-','+','-','+',
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+', 
        '|',' ','|',' ','|',' ','|',
        '+','-','+','-','+','-','+'];
        let squareSelection = "2;2";
        let gameOver = false;

        expect(isGameOver(gameBoard, squareSelection)).toEqual(gameOver);
    })

})

describe('UAT Scenario 3: Clean square 0;0 and get the number of bombs around', function() {
    it('Clean square 0;0 and get the number of bombs (3) around', () => {
        let gameBoard = ['+','-','+','-','+','-','+',
        '|','2','|','2','|','1','|',
        '+','-','+','-','+','-','+',
        '|','X','|','X','|','2','|',
        '+','-','+','-','+','-','+', 
        '|','3','|','X','|','2','|',
        '+','-','+','-','+','-','+'];
        let squareSelection = "0;0";
        let numberOfBombsAround = "3";

        expect(displaySquareValue(gameBoard, squareSelection)).toEqual(numberOfBombsAround);
    })

})
