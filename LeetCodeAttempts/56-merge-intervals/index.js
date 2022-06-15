/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    // Clarification: are intervals sorted, can something like \
    // [[1, 5], [2, 6], [3, 5]
    
    
    // put all intervals into a hashmap for easy lookup 
    // 
    // for loop through the hashmap (or should I do the array?)
    // if the start of one interval (A) is less than the end of another interval (B)
    // then merge the intervals into start of B and end of A.
    // add that interval to the hashmap, delete intervals A and B
    
    // return Object.keys(intHash) 

    // Base Case: if  intervals.length === 1, return intervals[0]
    if (intervals.length === 1) return intervals[0]
    
    const nonOverlappingIntervals = []
    let i = 0 
    let j = 0
    let checking = true
    
    while(checking) {
        const left = intervals[i][0]
        let right = intervals[i][1]
        console.log(`Beginning: ${left}, ${right}`)
        if (i === )
        for (j = i + 1; j < intervals.length; j++) {
            if (intervals[j][0] > left && intervals[j][0] <= right) {
                right = Math.max(intervals[j][1], right)
                console.log(`Changed to: ${left}, ${right}`)
                if (j === intervals.length - 1) {
                    nonOverlappingIntervals.push([left, right])
                    i = j + 1
                }
            } else {
                nonOverlappingIntervals.push([left, right])
                if (j === intervals.length - 1) {
                    i = j + 1
                } else {
                    i = j
                }
                
                break;
            }
            
        }
        
        console.log(nonOverlappingIntervals)
        
        
        if (i > intervals.length) {
            checking = false
        }
    }
        
    return nonOverlappingIntervals;
    
};