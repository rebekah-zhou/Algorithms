/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // create two pointers for beginning and end of height array
    
    let base = height.length - 1 
    let leftPointer = 0
    let rightPointer = height.length - 1
    let maxArea = Math.min(height[leftPointer], height[rightPointer]) * base
    
    while (leftPointer !== rightPointer - 1) {
        if (height[leftPointer] <= height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }
        base--
        maxArea = Math.max(maxArea, Math.min(height[leftPointer], height[rightPointer]) * base)
    }
    // create a maxArea variable and set it equal to the area between the two pointers (smaller val pointer times base)
    // look forward (check to the right for pointer1 and to the left for pointer2)
    // move the smaller pointer forward
    
    return maxArea
    
    
};