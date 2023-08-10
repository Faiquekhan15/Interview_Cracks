function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords('Hello World'));  // Output: "World Hello"
