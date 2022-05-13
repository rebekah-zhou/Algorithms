// Question 1: Find smaller int in an array of integers. 
// Approach: declare a minimum value holder. For loop.

const testArr = [5, 3, 1, 2, 2, 0, -4]
const testArr1 = []

function findSmallestValue(arr) {
    if (arr === null) {
        throw new Error("Null values not accepted.")
    }

    if (arr.length === 0) {
        throw new Error("Please give a non-empty array.")
    }

    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i])
    }

    return min;
}

console.log(findSmallestValue(testArr))
console.log(findSmallestValue([]))