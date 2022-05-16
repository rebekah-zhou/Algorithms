/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let maxSum = nums[0]
    let sum = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + sum < nums[i]) {
            sum = nums[i]
        } else {
            sum += nums[i]
        }
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum;
    
};