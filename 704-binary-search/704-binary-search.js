/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Base Case: target is not in nums. 
    // Check if target is greater than the last position or less than first position
    
    if (target > nums[nums.length - 1] || target < nums[0]) return -1
    
    return (function binarySearch(left=0, right=nums.length - 1) {
        const middle = Math.floor((left + right)/2)
        if(target === nums[middle]) return middle
        if(right === left + 1) {
            if (nums[right] === target) return right
            else return -1
        }
        else if (target < nums[middle]) {
            return binarySearch(left, middle)
        } else if (target > nums[middle]) {
            return binarySearch(middle, right)
        } 
    })();

    
    
    // set left and right arrays
    // Otherwise, compare target to median
    // if target === median, return median's index
    // else If target < median, recursively call search func on left
    // else if target > median, recursively call search func on right
    
    
    
};