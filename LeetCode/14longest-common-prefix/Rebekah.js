var longestCommonPrefix = function(strs) {
    const strsAlt = strs.slice(1)
    const commonLetters = "";
    for (let j = 1; j = strs[0].length-1; j++) {
        strsAlt.forEach(word => {
            for (let k = 0; k = strs[0].length; k++) {
                if (word.includes(strs[0].slice(k, j))) {
                    commonLetters = commonLetters.slice(k, j)
                    break;
                } 
            }
        }
    }

}

string1 = ["hello", "ghel", "gheo"]

//     const commonLetters = "";
//     for (j = 1; j = strs.length-1; j++) {
//         for (k = 0; k = strs[j][k].length; k++) {
//             if (strs[0][k] === strs[j][k]) {
//                 commonLetters += strs[j][k]
//                 break;
//             } 
//         } 
//     }
// };

// 

// function hasCommonLetters(words) {
//     if (words[0][k] === strs[j+1][k]) {
//         commonLetters += strs[j+1][k]
//     }
// }