// Question
// Given an array of int and a number x, check for a pair of int in the array that sum to x

// return true or false

// Test Cases
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [-5, 0, 1, 3]
const arr3 = [-100, 100, 5, 7]
const arr4 = []

const xArr = [7, 0, 1, -4]


// Psuedocode

// Base Case: length of the array is less than 2. 
// initialize a hashmap and put all values of the array into the hashmap, the key is the element, the value is the index 
// for loop on the array, take difference between element and x, and check if it exists in the hashMap, check if it's not the same index as the element itself 
// if the difference exists, return true 
// if we run through the entire loop then just return false

function findSum(arr, x) {
    if (arr.length < 2) {
        return false
    }

    const hashMap = {}

    for(let num = 0; num < arr.length; num++) {
        hashMap[arr[num]] = num
        // may be able to find solution early on
        const difference = x - arr[num]
        if ((hashMap[difference] || hashMap[difference] === 0) && hashMap[difference] !== num) return true
    }


    for(let num = 0; num < arr.length; num++) {
        const difference = x - arr[num]
        if ((hashMap[difference] || hashMap[difference] === 0) && hashMap[difference] !== num) return true
    }

    return false
}

console.log(findSum(arr4, xArr[0]))
console.log(findSum(arr4, xArr[1]))
console.log(findSum(arr4, xArr[2]))
console.log(findSum(arr4, xArr[3]))