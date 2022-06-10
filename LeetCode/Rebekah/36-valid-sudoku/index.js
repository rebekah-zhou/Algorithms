/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    // create a column, row, and square hash
    // push each value into each of the hashes
    // if there is a duplicate, return false
    
    // default return true
    
    const columnHash = {}
    const rowHash = {}
    const squareHash = {
        1: {},
        2: {}, 
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {} 
    }
    let ans = true
    
    for (let row = 0; row < board.length; row++) {
        rowHash[row] = {}
        for (let column = 0; column < board[row].length; column++) {
            if (row === 0) {
                columnHash[column] = {}
                columnHash[column][board[row][column]] = 1
            } else {
                if (board[row][column] !== "." && columnHash[column][board[row][column]]) {
                    ans = false
                    break;
                } else if (board[row][column] !== ".") {
                    columnHash[column][board[row][column]] = 1
                }
            }
             if (board[row][column] !== "." && rowHash[row][board[row][column]]) {
                 ans = false
                 break;
             } else {
                 rowHash[row][board[row][column]] = 1
             }
            
            // square logic
            if (row <= 2 && column <= 2) {
                if (!checkSquare(1)) break;
            }
            if (row <= 2 && (column >= 3 && column <= 5)) {
                if (!checkSquare(2)) break;
            }
            if (row <= 2 && (column >= 6)) {
                if (!checkSquare(3)) break;
            }
            if ((row > 2 && row < 6) && (column <= 2)) {
                if (!checkSquare(4)) break;
            }
            if ((row > 2 && row < 6) && (column >= 3 && column <= 5)) {
                if (!checkSquare(5)) break;
            }
            if ((row > 2 && row < 6) && (column >= 6)) {
                if (!checkSquare(6)) break;
            }
            if ((row > 5) && column <= 2) {
               if (!checkSquare(7)) break;
            }
            if (row > 5 && (column >= 3 && column <= 5)) {
                if (!checkSquare(8)) break;
            }
            if (row > 5 && column >= 6) {
                if (!checkSquare(9)) break;
            }
            
            function checkSquare(num) {
        if (board[row][column] !== "." && squareHash[num][board[row][column]]) {
            ans = false
            return false
        } else {
            squareHash[num][board[row][column]] = 1
            return true
        }
    }
            
        }
        
    }
    console.log(rowHash, columnHash)
    
    
    
    return ans
};