
function SeatingStudents(arr) {
    const n = arr.length;
    let maxStudents = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            // Check if the current seat is empty
            if (i === 0 || arr[i - 1] === 0) {
                // Check left
                if (i === n - 1 || arr[i + 1] === 0) {
                    // Check right
                    maxStudents++;
                    i++; // Move to the next seat since one student occupies two adjacent seats
                }
            }
        }
    }

    return maxStudents;
}

// Test the function with an example
console.log(SeatingStudents([0, 1, 0, 0, 0, 1, 0]));  // Output: 4
```

