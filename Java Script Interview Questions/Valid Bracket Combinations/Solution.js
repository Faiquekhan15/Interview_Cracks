function BracketCombinations(num) {
    function generateCombinations(current, openCount, closeCount) {
        if (openCount === 0 && closeCount === 0) {
            return [current];
        }

        let combinations = [];

        if (openCount > 0) {
            combinations = combinations.concat(generateCombinations(current + '(', openCount - 1, closeCount));
        }

        if (closeCount > openCount) {
            combinations = combinations.concat(generateCombinations(current + ')', openCount, closeCount - 1));
        }

        return combinations;
    }

    const validCombinations = generateCombinations('', num, num);
    return validCombinations.length;
}

// Test cases
console.log(BracketCombinations(3));  // Output: 5
