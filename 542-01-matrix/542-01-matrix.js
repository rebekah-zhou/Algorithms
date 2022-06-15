/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    // make queue
    // make ans array
    
    const queue = []
    const ansArr = []
    
    const m = mat.length
    const n = mat[0].length
    
    // instantiate rowLength and colLength
    
    // for loop to run through the mat rows
        // const ansRow = []
    // 2nd for loop to run through the mat col
    
    for (let row = 0; row < m; row++) {
        const ansRow = []
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 0) {
                ansRow.push(0)
                queue.push([row, col])
            } else {
                ansRow.push(null)
            }
            
            if (col === n-1) {
                ansArr.push(ansRow)
            }
        }
    }
    
    
    
    // if zero, 
        // add location to zero arr
        // populate ans array (add to ansRow) with 0 for this position
    // else (if one)
        // populate ans array (add to ansRow) with null 
    
    // if at the end of the row length, push ansRow to ansArr
    
    // while queue is not empty
        // shift the queue 
        // check adjacent spots for null
            // if null, 
                // add one to the value and put it into the ans array
                // add location to queue
    
    while(queue.length > 0) {
        const location = queue.shift()
        const rowL = location[0]
        const colL = location[1]
        checkAdjForNull(ansArr[rowL][colL], rowL + 1, colL)
        checkAdjForNull(ansArr[rowL][colL], rowL - 1, colL)
        checkAdjForNull(ansArr[rowL][colL], rowL, colL + 1)
        checkAdjForNull(ansArr[rowL][colL], rowL, colL - 1)
    }
    
    function checkAdjForNull(value, row, col) {
        if (row > -1 && col > -1 && row < m && col < n) {
            if (ansArr[row][col] === null) {
                ansArr[row][col] = value + 1
                queue.push([row, col])
            }
        }
    }
    
    // create function that checks adjacent spots for null
    // takes in the value 
        // if null
            // puts the ++value into the spot
    
    return ansArr
        
    
    
    
        
    
    
};