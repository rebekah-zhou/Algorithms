/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    if (s.length === 1) return 1
    
    // for each letter, add to hash 
    // have a running total for longest palindrome
    
    let palindromeLength = 0
    const sHash = {}
    
    
    for (let i = 0; i < s.length; i++) {
       if (sHash[s[i]] % 2 === 1) {
            palindromeLength += 2
        }
        
        sHash[s[i]] = ++sHash[s[i]] || 1
    }
    
    const found = Object.keys(sHash).find(key => sHash[key] % 2 === 1)
    
    if (found) {
        return ++palindromeLength
    } else return palindromeLength
    
    // if the value is even, 
        // check if the key is the middle value
        // change middle to null, add 1 to longest palindrome
        // else add 2 to longest palindrome 
    // if odd
        // check if middle is null 
        // if so, set middle = key
    
    // after for loop, if middle !== null, add one to longest palindrome
};