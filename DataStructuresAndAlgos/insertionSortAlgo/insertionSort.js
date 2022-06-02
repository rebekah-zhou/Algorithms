const arr = [12, 1, 4, 2, 9]

function insertionSort(arr) {
    //Base case
    if (arr.length === 1) return arr

    //Holds the unsorted element we are trying to sort
    let key

    //We use i as the cursor that tracks the next unsorted element 
    for (let i = 1; i < arr.length; i++) {
      //Sets the key to the next unsorted element
      key = arr[i]
        //We use j as the cursor that will compare the unsorted element with elements of the sorted array,
      let j = i-1
        //We use a while loop to continue going through the sorted array to find where we should insert
        //the key, until we find the element that it bigger than our key
        while (j >= 0 && arr[j] > key) {
          //while going through the sorted elements, we shift the elements we know are bigger than our key one to the right
          arr[j + 1] = arr[j]; 
          //then set the cursor to the next element to the left and recheck to see if it is where we should insert our key
            j = j - 1; 
        }
      //once that loop breaks and we find our spot, we set that spot to our key value
        arr[j + 1] = key; 
        }
    return arr;
}

console.log(insertionSort(arr))