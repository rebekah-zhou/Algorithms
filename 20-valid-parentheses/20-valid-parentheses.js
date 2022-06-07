/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // Base Case:
    // if s.length === 1 return false
    if (s.length === 1) return false
    
    // Special Case: if the open array is empty and the character is in the right array, return false
    
    const leftChars = ['(', '[', '{']
    const rightChars = [')', ']', '}']
    const openArr = []
    
    for(let i = 0; i < s.length; i++) {
        const letter = s.charAt(i)
        if (openArr === null && rightChars.includes(letter)) return false
        
        if (leftChars.includes(letter)) {
            openArr.push(letter)
        } else {
            const leftChar = openArr.pop()
            let matching = false
            for (let j = 0; j < 3; j++) {
                if (leftChar === leftChars[j] && letter === rightChars[j]) {
                    matching = true
                }
            }
            if (matching === false) return false
           
        }
    }
    // create an array with ['(', '[', '{'] left 
    // create an array with right 
    // create an open array to hold left characters 
    // for each character in the string
    // if character is in the left array, push that character to the open array
    // if character is in the right array, pop the open array and check if it is the right match to close the character 
    // else return false
    if (openArr.length) return false
    return true
};