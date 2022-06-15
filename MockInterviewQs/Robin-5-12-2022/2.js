// Question: Reverse a string. 

// Brute force: For loop. Split string into array, for loop, and catenate.

const tests = ["hello world", null, ""]

// function reverseString(string) {
//     if (string === null) {
//         return null
//     }

//     const reversedStringArr = []
//     string.split("").forEach(letter => {
//         reversedStringArr.unshift(letter)
//     })

//     let reversedString = ""

//     reversedStringArr.forEach(letter => {
//         reversedString = reversedString + letter
//     })

//     return reversedString
// }

// console.log(reverseString(""))

function reverseString(string) {
    if (string === null) return null
    
    let reversedString = ""

    for(const letter in string) {
        reversedString = string[letter] + reversedString
    }

    return reversedString
}

console.log(reverseString("Hello"))