var threeSum = function(nums) {
    // do one pass and put into a hashMap 
    // nested for loops to add up two different values, and then check to see if the number needed to get to zero is in the hashmap. 
    // if exists, push values to an array, add array to another hashmap (to avoid duplicates)
    
    // map the hashmap and concate it together
    
    if(nums.length < 3) return []
    
    if(nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) return nums
    
    const numsHash = {}
    const tripletHash = {}
    
    for(let num = 0; num < nums.length; num++) {
        if (numsHash[nums[num]].length === 2) {
            continue
        } else if(numsHash[nums[num]]) {
             numsHash[nums[num]] = [numsHash[nums[num]], num]
        } else if (!numsHash[nums[num]]) {
            numsHash[nums[num]] = [num]
        }
       
        
    }
    
    const keys = Object.keys(numsHash)

};