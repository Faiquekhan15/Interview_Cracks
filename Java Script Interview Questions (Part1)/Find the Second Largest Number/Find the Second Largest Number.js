function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

console.log(secondLargest([5, 3, 7, 1, 9]));  // Output: 7
