function generateParentheses(n) {
    const results = [];

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            results.push(current);
            return;
        }

        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return results;
}

console.log(generateParentheses(3));  // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
