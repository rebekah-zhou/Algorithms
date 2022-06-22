/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    // create ansArr
    
    // for each string in strs
    // make a hash 
    // for each word in ansArr, 
    // check if the letters match the hash,
    // if they do, add it to that array, otherwise go on to the next array in ansArr
    // if on the last array in ansArr, and it does'nt work, add it to ansArr in its own arr
    
    const ansArr = []
    
    strs.forEach(str => {
        if (ansArr.length > 0) {
            if (str === "") {
                const foundIndex = ansArr.findIndex(arr => arr[0] === "")
                if (foundIndex !== -1) {
                    ansArr[foundIndex].push(str)
                } else {
                    ansArr.push([str])
                }
            } else {
                const strHash = {}
            for (let i = 0; i < str.length; i++) {
                strHash[str[i]] = ++strHash[str[i]] || 1
            }
                const currLength = ansArr.length
                for (let arr = 0; arr < currLength; arr++) {
                    const copyStrHash = strHash
                    let isPushed = false
                    if (str.length !== ansArr[arr][0].length && arr !== currLength - 1) continue;
                    else if (str.length !== ansArr[arr][0].length && arr === currLength - 1) {
                        ansArr.push([str])
                        console.log(`pushing ${str} on line 39! result: ${ansArr}`)
                        break;
                    }
                    
                    for (let letter = 0; letter < ansArr[arr][0].length; letter++) {
                        if (copyStrHash[ansArr[arr][0][letter]]) {
                            copyStrHash[ansArr[arr][0][letter]]--
                        } else {
                            break;
                        }
                        if (letter === ansArr[arr][0].length - 1) {
                            ansArr[arr].push(str)
                            console.log(`pushing ${str} on line 51! result: ${ansArr}`)
                            isPushed = true
                        }
                    }
                    if (isPushed) break;
                    else if (arr === currLength - 1) {
                        ansArr.push([str])
                        console.log(`pushing ${str} on line 58! result: ${ansArr}`)
                    }
                } 
        }
            }
             else {
            ansArr.push([str])
                 
        }
    })
    
    return ansArr
};