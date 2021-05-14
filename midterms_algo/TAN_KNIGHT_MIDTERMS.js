

const printBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        process.stdout.write("__| ")
    }
    console.log("")
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] += ""

            if (board[i][j].length === 1) {

                process.stdout.write("0" + board[i][j] + "| ")
            }
            else {

                process.stdout.write(board[i][j] + "| ")
            }

        }
        console.log("")
    }
    for (let i = 0; i < board.length; i++) {
        process.stdout.write("__| ")
    }
    console.log("")
}

const isSafe = (x, y, board) => {


    if (x >= 0 && x < n) {
        if (y >= 0 && y < n) {
            if (board[x][y] === "X") {
                return true;
            }
        }
    }

    return false;
}

const checkSolution = (x, y, knightMoveCounter, board, possibleMoves) => {

    let counter
    let nextMoves = [0, 0] //tuple for storing next move
    let finishCheck = Math.pow(n, 2)

    for (counter = 0; counter < 8; counter++) {
        nextMoves[0] = x + possibleMoves[counter][0];
        nextMoves[1] = y + possibleMoves[counter][1];

        if (isSafe(nextMoves[0], nextMoves[1], board)) {

            board[nextMoves[0]][nextMoves[1]] = knightMoveCounter

            if (checkSolution(nextMoves[0], nextMoves[1], knightMoveCounter + 1, board, possibleMoves)) {


                return true
            }

            else {
                board[nextMoves[0]][nextMoves[1]] = "X"
            }
        }
    }

    if (knightMoveCounter === finishCheck + 1) {
        return true;
    }

    return false
}

const testBoard = (n, possibleKnightMoves) => {

    let knightsMoves = []

    for (let i = 0; i < n; i++) {
        knightsMoves.push([[]])
        for (let j = 0; j < n; j++) {
            knightsMoves[i][j] = 0

        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            knightsMoves[i][j] = "X"
        }
    }

    knightsMoves[0][0] = 1;

    if (checkSolution(0, 0, 2, knightsMoves, possibleKnightMoves) === false) {

        return false
    }

    else {
        console.log("Solution")
        printBoard(knightsMoves)
        console.log("Solution")
    }
    return true

}

let n = 12
;

//possible knight moves

const possibleKnightMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1]
]
testBoard(n, possibleKnightMoves);
