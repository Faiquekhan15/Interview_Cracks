function isValidParentheses(str) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };

    for (const char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses('()[]{}'));  // Output: true
