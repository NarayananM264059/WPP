 // Define a function named vowel Count with parameter str
 const vowel_Count = (str) => {
    return str.replace(/[^aeiou]/g, "").length;
};

// Log the result of calling vowel_Count with the given strings to the console
console.log(vowel_Count("Python"));
console.log(vowel_Count("javascript.com"));