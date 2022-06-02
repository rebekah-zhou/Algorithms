/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(nums.length === 1) return nums
    
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j > -1; j--) {
            if(nums[j - 1] > nums[j]) {
                swap(nums, j - 1, j)
            }
        }
    }
    return nums
    
    
};

const swap = (arr, index1, index2) => {
    const holder = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = holder
}