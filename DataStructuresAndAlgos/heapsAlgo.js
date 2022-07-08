const swap = function (array, pos1, pos2) {
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };
  
  const heapsPermute = function (array, n, results = []) {
    n = n || array.length;
    if (n === 1) {
      results.push(array.slice());
      console.log(array);
    } else {
      for (let i = 1; i <= n; i += 1) {
        heapsPermute(array, n - 1, results);
        let j
        if (n % 2) {
          j = 1;
        } else {
          j = i;
        }
        swap(array, j - 1, n - 1);
      }
    }
  
    return results;
  };
  
  console.log(heapsPermute(['a', 'b', 'c', 'd']));