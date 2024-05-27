function createNewString(str) {
    // Check if the input is a string and has at least 3 characters
    if (typeof str !== 'string' || str.length < 3) {
      return "Input must be a string with at least 3 characters";
    }
  
    // Get the last 3 characters of the string
    const lastThree = str.slice(-3);
  
    // Create the new string by adding the last 3 characters to the front and back
    const newString = lastThree + str + lastThree;
  
    return newString;
  }
  
  // Example usage
  console.log(createNewString("python")); // Output: "honpythonhon"
  console.log(createNewString("java")); // Output: "avajavaava"
  console.log(createNewString("ab")); // Output: "Input must be a string with at least 3 characters"
  console.log(createNewString(123456)); // Output: "Input must be a string with at least 3 characters"
  
  