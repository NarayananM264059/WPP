function isMultipleOfThreeOrSeven(num) {
    // Check if the input is a positive number
    if (typeof num !== 'number' || num <= 0) {
      return "Input must be a positive number";
    }
  
    // Check if the number is a multiple of 3
    if (num % 3 === 0) {
      return "The number is a multiple of 3";
    }
    // Check if the number is a multiple of 7
    else if (num % 7 === 0) {
      return "The number is a multiple of 7";
    }
    // If the number is not a multiple of 3 or 7
    else {
      return "The number is not a multiple of 3 or 7";
    }
  }
  
  // Example usage
  console.log(isMultipleOfThreeOrSeven(9));         // Output: "The number is a multiple of 3"
  console.log(isMultipleOfThreeOrSeven(14));        // Output: "The number is a multiple of 7"
  console.log(isMultipleOfThreeOrSeven(11));        // Output: "The number is not a multiple of 3 or 7"
  console.log(isMultipleOfThreeOrSeven(-5));        // Output: "Input must be a positive number"
  console.log(isMultipleOfThreeOrSeven("hello"));   // Output: "Input must be a positive number"
  
  