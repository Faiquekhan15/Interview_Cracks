function runLengthEncoding(str) {
    let encoded = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            encoded += count + str[i];
            count = 1;
        }
    }

    return encoded;
}

console.log(runLengthEncoding('aaabbcddd'));  // Output: "3a2b1c3d"
