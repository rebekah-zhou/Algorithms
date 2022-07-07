// Question 1: Sum all numbers
// Write a function called sumRange. 
// It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

const sumRange = num => {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

console.log(sumRange(3))

/*
sumRange(3), return 3 + sumRange(2)
sumRange(2), return 2 + sumRange(1)
sumRange(1) === 1 

so sumRange(2) === 2 + 1 === 3
thus sumRange(3) === 3 + 3 === 6
*/

// ----------------------------------------------------------------//

/*
Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

Sample:

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
*/

const power = (base, exp) => {
    if (exp === 0) return 1
    return base * power(base, exp - 1)
}

console.log(power(3, 3))
/*
power(2, 4) = 2 * power(3) = 2 * 8 = 16  
power(2, 3) = 2 * power (2) = 2 * 4
power(2, 2) = 2 * power (1) = 2 * 2
power(2, 1) = 2 * power (0) = 2 * 1
power (2, 0) = 1
*/

const factorial = (num) => {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5), 5*4*3*2)