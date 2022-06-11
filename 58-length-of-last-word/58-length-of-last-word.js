/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 1) {
        return s[0] ? 1 : 0
    }
    
    let counter = 0
    for(let i = s.length - 1; i > -1; i--) {
        if (s.charAt(i) !== " ") {
            counter++
            if (i === 0) return counter
        } else if (s.charAt(i) === " " && counter > 0) return counter
    }
};