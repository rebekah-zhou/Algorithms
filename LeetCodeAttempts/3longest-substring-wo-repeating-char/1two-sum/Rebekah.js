const nums = [0, 5, 1, -24]
const target = 5;

// Passed May 2, 2022
function twoSum(nums, target) {
    const ans = []

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            ans.push(i)
            ans.push(j)
            break;
        }
    }
    if (ans.length === 2) {
        break;
    }
}

return ans;
}

// Second Try

function twoSum(nums, target) {
    const obj = {}
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        const lookingFor = target - nums[i];
        if (obj[lookingFor] || obj[lookingFor] === 0) {
            ans.push(i) 
            ans.push(obj[lookingFor])
            break;
        }
        obj[nums[i]] = i;
    }
    return ans;
}

console.log(twoSum([3.5, 3.5], 7))