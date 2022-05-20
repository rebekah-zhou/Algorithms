var rotate = function(matrix) {
    const l = matrix.length - 1
    for (m = 0; m <= (l-1)/2; m++) {
            if (m=0) {
                for (n = 0; n < l; n++) {
                    let holder = matrix[l-n][m]
                    matrix[l-n][m] = matrix[l-m][l-n]
                    matrix[l-m][l-n] = matrix[n][l-m] 
                    matrix[n][l-m] = matrix[m][n]
                    matrix[m][n] = holder
                }
            } else {
                for (n = m; n <= l-m; n++) {
                    let holder = matrix[l-n][m]
                    matrix[l-n][m] = matrix[l-m][l-n]
                    matrix[l-m][l-n] = matrix[n][l-m] 
                    matrix[n][l-m] = matrix[m][n]
                    matrix[m][n] = holder
            }
        }
    }
}
