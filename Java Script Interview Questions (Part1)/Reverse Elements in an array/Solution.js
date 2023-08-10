const a = [1, 2, 3];

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const reversedArray = reverseArray(a);

console.log(a);               // Output: [1, 2, 3] (original array remains unchanged)
console.log(reversedArray);   // Output: [3, 2, 1] (reversed array)
