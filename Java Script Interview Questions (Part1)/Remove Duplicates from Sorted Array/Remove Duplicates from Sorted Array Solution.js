function removeDuplicates(nums) {
    let index = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i];
        }
    }

    return index + 1;
}

const nums = [1, 1, 2, 2, 3, 4, 4, 4, 5];
console.log(removeDuplicates(nums));  // Output: 5
console.log(nums.slice(0, 5));  // Output: [1, 2, 3, 4, 5]
