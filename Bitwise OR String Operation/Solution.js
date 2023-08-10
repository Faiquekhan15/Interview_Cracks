function BitwiseOne(strArr) {
    // Extract the two binary strings from the input array
    const binary1 = strArr[0];
    const binary2 = strArr[1];
    
    // Ensure both binary strings have the same length
    if (binary1.length !== binary2.length) {
        return "Input strings must have equal length.";
    }
    
    // Perform bitwise OR operation and construct the result string
    let result = "";
    for (let i = 0; i < binary1.length; i++) {
        if (binary1[i] === "1" || binary2[i] === "1") {
            result += "1";
        } else {
            result += "0";
        }
    }
    
    return result;
}

// Test the function
const input = ["1001", "0100"];
const output = BitwiseOne(input);
console.log(output);  // Output: "1101"
