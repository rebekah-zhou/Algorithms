// Question
/*
Given a matrix of dimension m*n where each cell in the matrix can have values 0, 1 or 2 which has the following meaning:

0: Empty cell
1: Cells have fresh oranges
2: Cells have rotten oranges
Determine what is the minimum time required so that all the oranges become rotten. A rotten orange at index [i,j] 
can rot other fresh orange at indexes [i-1,j], [i+1,j], [i,j-1], [i,j+1] (up, down, left and right). If it is impossible to rot every orange then simply return -1.
*/

// cannot rot oranges that are islands


// Test Cases
const test1 = [
    [1, 2, 1],
    [1, 1, 1],
    [1, 1, 1]
]

// return 3
// if 2 is in the middle, ans = 2
// if 2 is in the corner, ans = 4

const test2 = [
    [0, 1, 2],
    [0, 0, 0],
    [1, 0, 0]
]
// there exists an island, return -1

const test3 = [
    [1, 0, 1, 2],
    [2, 0, 1, 1],
    [1, 1, 1, 1]
]

// return 

// Psuedocode

// check for an island 


// find all rotten oranges 
// add the location to a rotten orange queue 
// initialize time = 0 

// [[0, 3], [1,0]]
// let initialOranges = queue.length


// while queue not empty
// if initialOranges === 0, 
    // set initialOranges = queue.length
    // time++
// pop the rotten orange queue 
// initialOranges--
    // check the matrix if the adjacent positions to the popped orange have a fresh orange
        // if so, turn it into a rotten orange (2) & add it to the queue

// run through the matrix checking for fresh oranges. 
// if they exist, return -1
// else return time

console.log(howLongToRot(test1))

function howLongToRot(matrix) {

    if (matrix === null) return 0
    const rotten = []
    let time = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 2) {
                rotten.push([row, col])
            }
        }
    }

    let initialOranges = rotten.length

    while(rotten.length > 0) {
        if (initialOranges === 0) {
            initialOranges = rotten.length
            time++
        }
        const rottenOrange = rotten.shift()
        const rowRO = rottenOrange[0]
        const colRO = rottenOrange[1]
        initialOranges--
        checkAdj(rowRO + 1, colRO)
        checkAdj(rowRO - 1, colRO)
        checkAdj(rowRO, colRO + 1)
        checkAdj(rowRO, colRO - 1)

        function checkAdj(row, col) {
            if (row < matrix.length && col < matrix[0].length && col > -1 && row > -1)
            if (matrix[row][col] === 1) {
                matrix[row][col] = 2
                rotten.push([row, col])
            }
        }
    }

    return time
}