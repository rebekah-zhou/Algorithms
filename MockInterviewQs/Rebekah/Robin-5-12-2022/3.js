// Question: Determine if a number if prime or not 

// Assume number is n. Test if numbers below n/2 are divisible by n (using modulo), try to exclude composite numbers (recursion).  

const tests = [4, 5, 9, 13, 2, 99, 17]

function isPrime(num) {

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }

    return true
}

for (let i = 0; i < tests.length; i++) { 
    console.log(isPrime(tests[i]))
}