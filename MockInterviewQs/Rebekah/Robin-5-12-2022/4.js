// Question: Design Question. Design tic tac toe. 

// Initial Thoughts Player moves 
const arr = [
    ['x', 'x', 'o'], 
    [null, null, null],
    [null, 'o', null]
]

// Assignment of "X" or "O" to player
// Decide who goes first
// Reset board if need be
// Player 1 makes a move, then Player 2, etc until ...
// There is 3 in a row of matching symbols 
// After every move, there is a check for a win. 
// Game ends when there is a win and congratulates the player who last moved.
// Otherwise, when the board is filled and there is no win, we declare a cat's game and end.
// Ask for replay.

// Board 
// Players 
// Logic how win is determined

class TicTacToe {
    constructor() {
        this.player1 = {
            name: "Player 1",
            wins: 0,
            losses: 0,
            moves: [],
            symbol: null
        }
        this.player2 = {
            name: "Player 2",
            wins: 0,
            losses: 0,
            moves: [],
            symbol: null
        }
    }

    createNewBoard() {
        this.board = [
            [null, null, null], 
            [null, null, null],
            [null, null, null]
        ]
    }

    checkForWin(player) {
        // only need to check when a player has made 3 moves
        const possibleWins = [
            [7, 8, 9],
            [4, 5, 6],
            [1, 2, 3],
            [1, 4, 7],
            [2, 5, 8], 
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]


        // board[0][0], board[0][1], board[0][2]
        return !!possibleWins.find(win => {
            console.log(win)
            console.log(player.moves)
            console.log(win === player.moves)
        })
        
    }
}

const tictactoe = new TicTacToe
console.log(tictactoe.checkForWin({moves: [1, 2, 3]}))