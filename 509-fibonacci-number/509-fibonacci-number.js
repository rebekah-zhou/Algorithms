/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) return n
    return fib(n-1) + fib(n-2)
};


// F(5) = F(4) + F(3)
// F(4) = F(3) + F(2) = 2 + 1 = 3
// F(3) = F(2) + F(1) = arr[2] + arr[1] = 1 + 1 = 2
// F(2) = F(1) + F(0) = arr[1] + arr[0] = 1
