const bubbleSort = input => {
  let swapping = true;
  
  while (swapping) {
    for (let i = 0; i < input.length - 1; i++) {
      if(input[i] > input[i+1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i+1]} in [${input}]`);
        swap(input, i, i+1)
      } else {
        swapping = false
      }
    }
  }
  return input;
};

const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
  };
  

  
