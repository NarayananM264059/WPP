const upperLower = (str) => {
    // If the string length is less than 3, return the string in uppercase
    if (str.length < 3) {
      return str.toUpperCase();
    }
  
    // Create the lowercase substring of the first 3 characters of the string
    const frontPart = str.substring(0, 3).toLowerCase();
    // Create the substring of the string from index 3 to the end
    const backPart = str.substring(3);
  
    // Return the concatenation of frontPart and backPart
    return frontPart + backPart;
  };
  
  // Log the results with descriptive messages
  console.log(`Transformed "Python": ${upperLower("Python")}`);
  console.log(`Transformed "Py": ${upperLower("Py")}`);
  console.log(`Transformed "JAVAScript": ${upperLower("JAVAScript")}`);
  
  // Additional test cases
  console.log(`Transformed "A": ${upperLower("A")}`);
  console.log(`Transformed "AB": ${upperLower("AB")}`);
  console.log(`Transformed "abcde": ${upperLower("abcde")}`);
  console.log(`Transformed "aBcDe": ${upperLower("aBcDe")}`);
  