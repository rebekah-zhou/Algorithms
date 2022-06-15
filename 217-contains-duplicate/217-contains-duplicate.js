/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    if (nums.length < 2) return false
    
    const numsHash = {}
    
    for (let i = 0; i < nums.length; i++) {
        numsHash[nums[i]] = ++numsHash[nums[i]] || 1
        if (numsHash[nums[i]] > 1) {
            return true
        }
    }
    
    return false
};