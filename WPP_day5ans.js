function removeCharAt(str, position) {
    // Check if the input is a string
    if (typeof str !== 'string') {
      return "Input must be a string";
    }
  
    // Check if the position is a valid index
    if (position < 0 || position >= str.length) {
      return "Invalid position";
    }
  
    // Use the slice() method to remove the character at the specified position
    return str.slice(0, position) + str.slice(position + 1);
  }
  
  // Example usage
  console.log(removeCharAt("Python", 0));  // Output: "ython"
  console.log(removeCharAt("Python", 4));  // Output: "Pythn"
  console.log(removeCharAt(12345, 2));     // Output: "Input must be a string"
  console.log(removeCharAt("text", 5));    // Output: "Invalid position"
  
