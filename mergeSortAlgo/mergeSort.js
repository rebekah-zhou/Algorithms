const arr = [4, 8, 7, 2, 11, 1, 3]

function mergeSort(arr){
    // Base case
    if (arr.length <= 1) return arr

    // Dividing into halves
    let mid = Math.ceil(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []

    while (left.length && right.length) {
        // Add the smaller of the smallest element of left/right arrays
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    // Concatenating the leftover elements
    // in case the while loop didn't run through all of the left/right elements
    return [...result, ...left, ...right]
}

console.log(mergeSort(arr))