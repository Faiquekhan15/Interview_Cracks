function subarrayWithSum(nums, target) {
    let start = 0;
    let sum = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        
        while (sum > target) {
            sum -= nums[start];
            start++;
        }

        if (sum === target) {
            return [start, end];
        }
    }

    return [];
}

console.log(subarrayWithSum([1, 2, 3, 4, 5], 9));  // Output: [2, 4]
