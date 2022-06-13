/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const m = matrix.length
    const n = matrix[0].length
    
    if (m === 1) {
            return matrix[0].includes(target)
    }
    
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false
    
    // find median of matrix
    // compare last index the median array and first index of median + 1 array
    // check if between first and last => return false
    // if target < last index of medianArr 
        // check if target > first index of medianArr 
            //   recursive call with new ending index
    
    // else if target > first index of medianArr + 1 
        // check if target < last index of medianArr + 1 
        // else recursive call with 2nd half of array
    
    // else return false (it's between two arrays)
    
    return search(0, m - 1)
    
    function search(firstIndex, lastIndex) {
        const medIndex = Math.floor(((lastIndex + 1) + firstIndex)/2)
        
        if (target > matrix[medIndex][n-1] && target < matrix[medIndex + 1][0]) return false
        
        if (target <= matrix[medIndex][n-1]) {
            if (target >= matrix[medIndex][0]) {
                return matrix[medIndex].includes(target)
            } else {
                return search(firstIndex, medIndex - 1)
            }
        } else {
            if (target <= matrix[medIndex + 1][n - 1]) {
                return matrix[medIndex + 1].includes(target)
            } else {
                return search(medIndex + 1, lastIndex)
            }
        }
    }
};