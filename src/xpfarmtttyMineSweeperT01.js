
const GAMEOVER_MESSAGE = "BOOM! – Game Over."
const VICTORY_MESSAGE = "the land is cleared! GOOD JOB!"
function mineSweeper01(definedGameBoard, currentGameBoard, selectedSquares, markBomb) {
    const NUMBER_BOMBS_IN_GAME = countNumberOfBoms(definedGameBoard);
    let numberSquaresToOpen = 9;
    selectedSquares = selectedSquares.split(' + ');
    numberSquaresToOpen = numberSquaresToOpen - NUMBER_BOMBS_IN_GAME;

    for (let i = 0; i < selectedSquares.length; i++) {
        currentGameBoard[captureSquareSelection(selectedSquares[i])] = displaySquareValue(definedGameBoard, selectedSquares[i], markBomb);
        if (!checkGameOver(currentGameBoard[captureSquareSelection(selectedSquares[i])])){
            numberSquaresToOpen = numberSquaresToOpen - 1;
        } 
        else{
            displayGameBoard(currentGameBoard, GAMEOVER_MESSAGE);
            return GAMEOVER_MESSAGE;
        }
    }
    //displayGameBoard(currentGameBoard,"test");
    return (checkVictory(currentGameBoard, numberSquaresToOpen)) ? VICTORY_MESSAGE : currentGameBoard;
} 

function countNumberOfBoms(definedGameBoard) {
    let numberBombsInGame = 0;
    definedGameBoard.forEach(element => { if (element == "X") numberBombsInGame ++;      
    });
    return numberBombsInGame;
}

function captureSquareSelection(squareSelection) {
    const MAP_SQUARE_SELECTION_TO_BOARD = {
          '0;0' : 36,
          '0;1' : 38,
          '0;2' : 40,
          '1;0' : 22,
          '1;1' : 24,
          '1;2' : 26,
          '2;0' : 8,
          '2;1' : 10,
          '2;2' : 12,
        };

    return MAP_SQUARE_SELECTION_TO_BOARD[squareSelection];
}

function displaySquareValue(gameBoard, squareSelection, markBomb, unitTest) {
    let squarePosition = captureSquareSelection(squareSelection);

    displayUnitTestMessages(gameBoard, squarePosition, markBomb, unitTest);
    return (markBomb) ? "*" : gameBoard[squarePosition];
}

function displayUnitTestMessages (gameBoard, squarePosition, markBomb, unitTest){
    if (unitTest){
        markBomb ? displayGameBoard(gameBoard, "Square flagged as bomb")
        : displayGameBoard(gameBoard, gameBoard[squarePosition] + " bombs around your square.");
    }
}

function createGameBoard() {
    let gameBoard = ['+','-','+','-','+','-','+',
    '|',' ','|',' ','|',' ','|',
    '+','-','+','-','+','-','+',
    '|',' ','|',' ','|',' ','|',
    '+','-','+','-','+','-','+', 
    '|',' ','|',' ','|',' ','|',
    '+','-','+','-','+','-','+'];
    displayGameBoard(gameBoard, "[Sandbox 3x3] Game created");
    return gameBoard;
}

function checkGameOver(squareValue){
    return squareValue == "X" ? true : false;
}

function checkVictory (currentGameBoard, numberSquaresToOpen){
    if (numberSquaresToOpen == 0){
        displayGameBoard(currentGameBoard, VICTORY_MESSAGE);
        return true;
    }
    else{
        return false;
    }
}

function displayGameBoard(gameBoard, message){
    let rowsOfGameBoard = [];
    let rowOfGameBoard = "";
    let j = 0;
    for(let i = 1; i <= gameBoard.length; i++){
        rowOfGameBoard += gameBoard[i-1];
        if (i % 7 == 0){
            rowsOfGameBoard[j] = rowOfGameBoard;
            j += 1;
            rowOfGameBoard = "";
        }
    }
    console.log(rowsOfGameBoard, message);
}

module.exports.createGameBoard = createGameBoard
module.exports.mineSweeper01 = mineSweeper01
module.exports.captureSquareSelection = captureSquareSelection
module.exports.displaySquareValue = displaySquareValue
module.exports.isGameOver = checkGameOver