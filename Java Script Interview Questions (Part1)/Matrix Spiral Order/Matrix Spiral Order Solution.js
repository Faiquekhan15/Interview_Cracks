function spiralOrder(matrix) {
    const result = [];
    
    while (matrix.length) {
        result.push(...matrix.shift());
        for (const row of matrix) {
            result.push(row.pop());
        }
        result.push(...(matrix.pop() || []).reverse());
        for (const row of matrix.reverse()) {
            result.push(row.shift());
        }
    }
    
    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix));  // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
