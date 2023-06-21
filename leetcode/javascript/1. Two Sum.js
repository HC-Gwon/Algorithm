var twoSum = function(nums, target) {
    const answer = [];
    const diff = {};

    for (let i = 0; i < nums.length; i += 1) {
        if (!diff[nums[i]]) {
            diff[nums[i]] = {
                index: i,
                diffValue: target - nums[i],
            }
        } 
    }

    for (let i = 0; i < nums.length; i += 1) {
        const checkDiffValue = diff[nums[i]].diffValue;

        if (diff[checkDiffValue] && diff[checkDiffValue].index !== i) {
            answer.push(i, diff[checkDiffValue].index);
            break;
        }
    }

    return answer;
};