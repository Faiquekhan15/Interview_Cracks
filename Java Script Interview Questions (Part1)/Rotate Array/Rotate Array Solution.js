function rotateArray(arr, steps) {
    const n = arr.length;
    steps %= n;
    return [...arr.slice(n - steps), ...arr.slice(0, n - steps)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));  // Output: [4, 5, 1, 2, 3]
