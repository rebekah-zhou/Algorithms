// Question: Given a sorted array of positive ints, rotated/shifted at some point. Return the index or the element where the rotation that happens


// Clarification: 


// Misc Notes: 


// Test Cases:

const test1 = [5, 2, 3, 4] 

const test2 = [8, 9, 1, 2, 3] // index 1 because shifted twice

const test3 = []

const test4 = [7, 8, 9, 11, 13, 1]

const test5 = [1]

const test6 = [1, 2]

// Psuedocode: 

// Run through the array and look for a decreasing turning point, once that is found, return the index. If not found, then return null. 
// Special case if array.length <= 1 return null
// Fast check for rotation, compare first and last elements 

// Base Case 
// if first < last return null (because its sorted) 
// else 
// if array[index1] > array[index1 + 1] return index1
// calculate mid = n/2
// compare first and mid, if first > mid, call function on function (array, first, mid)
// else if
// compare mid and last, if mid > last, call function on function (array, mid, last) 

function findIndexOfRotation(array, first=0, last=array.length) {
    
}



// [4, 1, 2, 3] rotated at index 0
// [3, 4, 1, 2] rotated at index 1




