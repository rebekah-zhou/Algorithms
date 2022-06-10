/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat
    const reshapedMatrix = []
    let cCount = 0
    let currArr = []
    
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if(c === 1) {
                reshapedMatrix.push([mat[row][col]])
            } else if (cCount < c) {
                currArr.push(mat[row][col])
                cCount++
                if (col === mat[0].length - 1 && row === mat.length - 1) {
                    reshapedMatrix.push(currArr)
                }
            } else {
                reshapedMatrix.push(currArr)
                currArr = [mat[row][col]]
                cCount = 1
            }
        }
    }
    
    return reshapedMatrix
};