
// test cases: 

// [2], amt = 3 no possible way to fit, return -1
// [2, 7], amt = 5 
// [2, 4], amt = 4
// [4, 5, 6], amt = 33 -> try 33 mod 6 exist in coins? well 6*5 = 30, 3 doesn't exist. Are there numbers that add up to 3?
// Try 33 mod 6 + 6*n does that exist? 6 * 4 = 24, 33 - 24 = 9, 5+4 = 9. 
// [5, 6], amt = 25 -> 25 mod 6 = 1, doesn't exist. 6*4 = 24, 25 mod 5 = 0, return 25/5. 

// Base Cases. 
// if all values inside the coins array are greater than the amount, return 0. 


// [4, 5, 6] amt = 16. go through each value, if amt mod value === 0, set minCoinsNeeded = amt/mod. 
// if minCoinsNeeded doesn't get initialized, set equal to infinity
// have a maxValue (smaller than the amt) and minValue and set those on the first run through. get rid of any value greater than the amt from the array.
// think about initializing minCoinsNeeded to infinity if base cases are covered.
// starting with maxValue, if maxValue / amt > minCoinsNeeded, return minCoinsNeeded
// for loop on hashMap for (const currentValue in hashMap)
// 
// have a while loop with the condition currentValue / amt > minCoinsNeeded
// if amt mod currentValue exists, then set minCoinsNeeded to amt/currentValue + 1
// else, const recursive call, sending new array and the amt needed.
// if recursive call === -1 



// clarifications: is the coins array sorted? 
// if not, find the biggest coin that is less than the amount
// run through array and insert into hash, find  
// 

var coinChange = function(coins, amount) {
    for(let i = coins.length; i > -1; i--) {
        // loop through the coins array and see how many of the largest can
        // fit into the amount desired.
    }
};