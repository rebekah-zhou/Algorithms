/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Base Case 
    if (s.length === null || s.length === 1) return true
    
    const newStringArr = s.toLowerCase().match(/[a-z0-9]+/g)
    if (!newStringArr) return true
    const newString = newStringArr.reduce((prevWord, currWord) => prevWord + currWord, "")

    
    const middle = Math.floor(newString.length/2)
    let leftPointer
    let rightPointer = middle
    
    
    if (newString.length % 2) {
        leftPointer = middle
    } else {
        leftPointer = middle - 1
    }
    
    while (leftPointer > -1 && rightPointer < newString.length) {
        if (newString.charAt(leftPointer) === newString.charAt(rightPointer)) {
            leftPointer--
            rightPointer++
        } else return false
    }
    
    return true
    
    
    // two pointers, if s.length is odd, set both pointers to the middle
    // if even, set one left pointer = middle and right poimter equal to middle - 1
    // while loop 
    // check if s.charAt(leftPointer) === s.charAt(rightPointer)
    // if true, leftPointer--, rightPointer++
    // if false, return false
    
    // default return true
    
};