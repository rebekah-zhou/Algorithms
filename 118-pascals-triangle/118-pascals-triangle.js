/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Base Case 
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1,1]]
    
    // initialize pascalArr with base case 2
    const pascalArr = [[1], [1,1]]
    
    for (let i = 2; i < numRows; i++) {
        const prevArr = pascalArr[i - 1]
        const currArr = []
        for (let j = 0; j < prevArr.length - 1; j++) {
            currArr.push(prevArr[j] + prevArr[j+1])
        }
        pascalArr.push([1, ...currArr, 1])
    }
    
    return pascalArr
    
};