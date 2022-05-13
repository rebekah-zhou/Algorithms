
// Working solution 1 (slow/memory bad)
var lengthOfLongestSubstring = function(s) {
    // Start with first index and insert letters into a hash, adding to a count variable. If it exists, go to next instance. Return largest count.
    if (s === " " || s.length === 1) {
        return 1;
    }
    
    let maxCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        const stringObj = {}
        stringObj[s[i]] = 1
        let count = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (stringObj[s[j]]) {
                maxCount = Math.max(count, maxCount)
                break;
            } else {
                stringObj[s[j]] = 1
                count++
                if (j == s.length - 1) {
                    maxCount = Math.max(count, maxCount)
                }
            }
        }
    }
    
    return maxCount;
};

