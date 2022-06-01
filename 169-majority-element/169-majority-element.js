/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // put elements into a hashMap
    // Base case, if nums.length === 1, return nums[0]

    // if the element is already in the hashmap, increase its value by one. once the value is > n/2, return the key.
    
    if(nums.length === 1) return nums[0]
    
    const hashMap = {}
    
    for(let num = 0; num < nums.length; num++) {
        hashMap[nums[num]] = ++hashMap[nums[num]] || 1
        if(hashMap[nums[num]] > nums.length/2) return nums[num] 
    }
    
};