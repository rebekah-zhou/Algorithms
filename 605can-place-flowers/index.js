/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */



 var canPlaceFlowers = function(flowerbed, n) {
    let zeroCounter = 0
    let numOfOnes = 0
    let totalNumOfOnes = 0
    let cursor = 0
    let startingIndex = 0
    flowerbed = [0, 0, 0,0,0];
    n = 3;

    const found = flowerbed.find(element => element === 1)
    if (found) {
    while (cursor < flowerbed.length) {
        zeroCounter = 0
        console.log(`the cursor is ${cursor}`)
        for (k=cursor; k<flowerbed.length ; k++) {
            if (k===cursor) {
                startingIndex = k
            }
            if (flowerbed[k] === 0) {
                zeroCounter++
                console.log(`zeroCounter is ${zeroCounter}`)
                if (k === flowerbed.length - 1) {
                    cursor = flowerbed.length
                    break;
                }
            } else {
                cursor = k+1
                break;
            }
        } 
        if (flowerbed[0] === 0 && zeroCounter >= 2 && startingIndex === 0 ) {
            numOfOnes = (zeroCounter)/2
            totalNumOfOnes += Math.floor(numOfOnes)
            console.log(`1. totalNumOfOnes is ${totalNumOfOnes}`)
        } else if (flowerbed[flowerbed.length - 1] === 0 && zeroCounter >= 2 && cursor === flowerbed.length) {
            numOfOnes = (zeroCounter)/2
            totalNumOfOnes += Math.floor(numOfOnes)
            console.log(`2. totalNumOfOnes is ${totalNumOfOnes}`)
        } else if (zeroCounter >= 3) {
            numOfOnes = (zeroCounter - 1)/2
            totalNumOfOnes += Math.floor(numOfOnes)
            console.log(`3. totalNumOfOnes is ${totalNumOfOnes}`)
        }  
    }
} else {
    totalNumOfOnes = Math.ceil((flowerbed.length)/2)
}

    return n <= totalNumOfOnes ? true : false
};

console.log(canPlaceFlowers())