/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n, isBadVersion) {
        // call the API on the median and value before it
        // if n-1 false && n true return n bad.
        // if n-1 false && n false call API on the right half
        // if n-1 true && n true, call the API on the left half
        
        // base case
        if (n === 1) return n
        
        return recursiveBad(1, n, isBadVersion())

    };
};

function recursiveBad(first, last, isBadVersion) {
    let median = Math.ceil((first + last)/2)
    if (!isBadVersion(median-1) && isBadVersion(median)) {
        return median
    } else if (!isBadVersion(median-1) && !isBadVersion(median)) {
        recursiveBad(median, last)
    } else if (isBadVersion(median-1) && isBadVersion(median)) {
        recursiveBad(first, median)
    }
}