/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const sObj = {}
    const tObj = {}
    let isAnagram = true

    s.split("").forEach(letter => {
        if (sObj[letter]) {
            sObj[letter]++
        } else {
            sObj[letter] = 1
        }
    })

    t.split("").forEach(letter => {
        if (tObj[letter]) {
            tObj[letter]++
        } else {
            tObj[letter] = 1
        }
    })

    for (const letter in sObj) {
        if (sObj[letter] !== tObj[letter]) {
            isAnagram = false
        }
    }

    return isAnagram
};