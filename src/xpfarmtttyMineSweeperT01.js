function mineSweeper01() {
    let gameMessage = "BOOM! – Game Over."

    return gameMessage;
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

function displaySquareValue(gameBoard, squareSelection) {
    let squarePosition = captureSquareSelection(squareSelection);
    const NUMBER_OF_BOMBS = ["1", "2", "3"];

    if (NUMBER_OF_BOMBS.includes(gameBoard[squarePosition]))
        console.log(gameBoard[squarePosition]," bombs around your square.")
    return gameBoard[squarePosition];
}

function createGameBoard() {
    let gameBoard = ['+','-','+','-','+','-','+',
    '|',' ','|',' ','|',' ','|',
    '+','-','+','-','+','-','+',
    '|',' ','|',' ','|',' ','|',
    '+','-','+','-','+','-','+', 
    '|',' ','|',' ','|',' ','|',
    '+','-','+','-','+','-','+'];
    console.log(gameBoard, "[Sandbox 3x3] Game created");
    return gameBoard;
}

function isGameOver(gameBoard, squareSelection){
    let gameMessage = "BOOM! – Game Over."

    if (displaySquareValue(gameBoard, squareSelection) == "X"){
        console.log(gameMessage)
        return true;
    }
    else
    {
        return false;
    }
}

module.exports.createGameBoard = createGameBoard
module.exports.mineSweeper01 = mineSweeper01
module.exports.captureSquareSelection = captureSquareSelection
module.exports.displaySquareValue = displaySquareValue
module.exports.isGameOver = isGameOver