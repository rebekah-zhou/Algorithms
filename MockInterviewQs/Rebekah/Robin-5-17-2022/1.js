/*
Given a boolean 2D matrix, find the number of islands.
A group of connected 1s forms an island. For example, the below matrix contains 5 islands
 
let world = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1] ,
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
];
 
output: 5 islands  
 
*/


// Traverse the rows, looking for ones, use recursion to find other ones. If a one is found, add adjacent positions to an array of "potential island neighbors"

function findNumOfIslands(matrix) {
    let islands = []
    let count = 0
 
    for(let row = 0; row < matrix.length; row++) {
        for(let column = 0; column < matrix[0].length; column++) {
            if(!isIslandChecked(islands, row, column) && matrix[row][column]) {
                count++
                visitingNeighbors(islands, matrix, row, column)
                islands.push([row, column])
            }
        }
    }
}

function isIslandChecked(islands, row, column) {
    islands.forEach(island => {
        if(island[0] == row && island[1] == column) {
            return true
        }
    })
    return false
}

function visitingNeighbors(islands, matrix, row, column) {
    for(let neighborRow = row - 1 ; neighborRow <= row + 1; neighborRow++) {
        for(let neighborColumn = column - 1 ; neighborColumn <= column + 1; neighborColumn++) {
            if(matrix[neighborRow][neighborColumn]) {
                islands
            }   
        }
    }

}