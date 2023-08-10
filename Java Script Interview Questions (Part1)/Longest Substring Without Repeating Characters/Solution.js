function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < str.length; end++) {
        if (charIndexMap[str[end]] !== undefined) {
            start = Math.max(start, charIndexMap[str[end]] + 1);
        }
        charIndexMap[str[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeating('abcabcbb'));  // Output: 3
