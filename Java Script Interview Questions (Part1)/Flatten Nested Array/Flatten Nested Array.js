function flattenArray(arr) {
    return arr.reduce((flat, subArray) => flat.concat(Array.isArray(subArray) ? flattenArray(subArray) : subArray), []);
}

console.log(flattenArray([1, [2, 3, [4, 5]], 6, [7]]));  // Output: [1, 2, 3, 4, 5, 6, 7]
