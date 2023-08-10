function longestWordLength(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(longestWordLength('The quick brown fox jumps over the lazy dog'));  // Output: 5
