function twoSum(nums, target) {
    const numIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndexMap[complement] !== undefined) {
            return [numIndexMap[complement], i];
        }
        numIndexMap[nums[i]] = i;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
