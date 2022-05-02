var rotate = function(matrix) {
    const l = matrix.length
    console.log(l)
    for (m=0; m<l-1; m++) {
        for (n=0; n<l; n++) {
            let holder = matrix[m][n];
            matrix[m][n] = matrix[n][l-m]
            // matrix[n][l-m] = matrix[l-m][l-n]
            // matrix[l-m][l-n] = matrix[l-n][m]
            // matrix[l-n][m] = holder;
        }
    }
}

matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(matrix))