/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const sHash = {}
    
    for(let i = 0; i < s.length; i++) {
        sHash[s[i]] = ++sHash[s[i]] || 1
    }
    
    for(let i = 0; i < s.length; i++) { 
        if(sHash[s[i]] === 1) return i
    }
    
    return -1
};