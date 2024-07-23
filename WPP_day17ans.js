// Function to shift each alphabet character in a string to the next one in the alphabet
const alphabetCharShift = (str) => {
    // Use the map function to transform each character in the string
    return str.split("").map(char => {
        if (char >= 'a' && char <= 'z') {
            return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        return char;
    }).join(""); 
};

console.log(alphabetCharShift("Roaring")); 
