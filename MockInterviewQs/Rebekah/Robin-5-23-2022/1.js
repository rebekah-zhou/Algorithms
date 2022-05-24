// Question: Sets of mazes with mice, want to determine if the mice can escape. 2d array, 1s walls, 0s areas can traverse, mice *

// mouse can only go left right up down

// Test case 


// first find mouse or end, then 
// 1) check if up down left right contains a 0 && not in taken array (while loop, check) 
// 2) Choose one of the possible moves, check if the move is !, if so return true
// 3) add to a taken moves array, 
// 4) repeat 1 - 3, (don't want to choose a move in the taken moves array)

// go through once and keep track of available moves and the position of the * and ! in a hash
// 

// if mouse/end surrounded by walls, return false 



const maze = [
    [1, 0, 0, 0, 1],
    [1, '*', 1, 1, '!'],
    [1, 0, 0, 0, 0]
]

const maze1 = [
    [1, '*', 1, 1, '!'],
    [1 , 0, 0, 1, 1]
]

function canMouseEscape(maze) {
    const mazeHash = {}
    const takenMovesHash = {}
    let mouse, escape
    let currentPosition = mouse

    maze.forEach((row, rowIndex) => {
        row.forEach((column, colIndex) => {
            switch(maze[rowIndex][colIndex]) {
                case '*': {
                    mouse = [rowIndex, colIndex]
                    break
                }

                case '!': {
                    escape = [rowIndex, colIndex]
                    break
                }

                default: {
                    mazeHash[[rowIndex, colIndex]] = maze[rowIndex][colIndex]
                    break;
                }
            } 
        })
    } )



}

function checkForAvailableMove(mazeHash, currentPosition) {
    for(let n = -1; n <= 1; n++) {
        for(let m = -1; m <= 1; m++) {
            if(mazeHash[currentPosition[0] + n][currentPosition[1] + m]  === '!') {
                return 'win'
            } else if(mazeHash[currentPosition[0] + n][currentPosition[1] + m] === 0 && takenMovesHash[currentPosition[0] + n][currentPosition[1] + m] === null) {
                takenMovesHash[currentPosition[0] + n][currentPosition[1] + m] = maze[currentPosition[0] + n][currentPosition[1] + m]
                // change currentPosition
                checkForAvailableMove(mazeHash, currentPosition)
            }
        }
    }
}

canMouseEscape(maze)