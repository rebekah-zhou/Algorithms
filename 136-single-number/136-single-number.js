/**
 * @param {number[]} nums
 * @return {number}
 */

// make hashMap with key = value of nums element and value = how many times it appears. return
var singleNumber = function(nums) {
    // Base Case: if nums only contains 1 value, return that value
    
    if (nums.length === 1) return nums[0]
    // use a for loop to run though all elements of nums
    const hashMap = {}
    for (let num = 0; num < nums.length; num++) {
        
        if(hashMap[nums[num]]) {
            delete hashMap[nums[num]]
        } else {
            hashMap[nums[num]] = 1
        }
    }
    
    return Object.keys(hashMap)[0]
    
    // implement a hashMap that adds a key value pair with the key = the value of the nums element and value = 1. 
  
    // if the element of nums has already been added to the hashMap, delete it
    // by the end we should be left with one key value pair in the hashMap. This is our answer. 
    
   
    

};