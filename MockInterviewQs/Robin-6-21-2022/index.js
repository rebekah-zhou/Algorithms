// Question: Given two integer arrays A1[ ] and A2[ ] of size N and M respectively. Sort the first array A1[ ] such that all the relative positions of the elements in the first array are the same as the elements in the  second array A2[ ].
// See example for better understanding.
// Note: If elements are repeated in the second array, consider their first occurance only.

// make two arrays, one with the elements in A2 and one with the leftovers
// run through A1, 

// approach 1: add elements that are in A1 and A2 into a hash that keeps count of how many 
  // put the leftover elements in another array, sorting as you go.......

// make a hash with elements of A2
// for each element in A1, 
// check if it exists in the hash, if so, add 1,
// else add to the other array

// sort the other array 

// create an array by running through the elements of A2 and checking the hash for how many of that element there is, then pushing to that array
// append the two arrays

function sortTwoArrays(arr1, arr2) {
    const arr2Hash = {}
    const leftoverArr = []
    let leftResult = []
  
    for (let i = 0; i < arr2.length; i++) {
      arr2Hash[arr2[i]] = []
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2Hash[arr1[i]]) {
        arr2Hash[arr1[i]].push(arr1[i])
      } else {
        leftoverArr.push(arr1[i])
      }
    }
  
    leftoverArr.sort((a, b) => {
      return a-b
    })
    
    for (let i = 0; i < arr2.length; i++) {
      leftResult = [...leftResult, ...arr2Hash[arr2[i]]]
    }
    
    return leftResult.concat(leftoverArr)
  
  }
  
  console.log(sortTwoArrays([2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8], [2, 1, 8, 3]))
  console.log(sortTwoArrays([2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8], [0]))