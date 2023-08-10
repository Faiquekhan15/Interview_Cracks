function titleCase(sentence) {
    const words = sentence.split(' ');
    const titleCased = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return titleCased.join(' ');
}

console.log(titleCase('hello world'));  // Output: "Hello World"
