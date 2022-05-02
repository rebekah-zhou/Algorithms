const nums = [0, 5, 1, -24]
const target = 5;

// First attempt on May 2, 2022
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
