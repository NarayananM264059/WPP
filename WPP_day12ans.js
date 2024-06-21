// Define a function named reverseString using arrow function syntax
const reverseString = (str) => {
    // Check if the input is a string
    if (typeof str !== 'string') {
      return 'Input must be a string';
    }
    
    // Use split, reverse, and join methods to reverse the characters of the string
    return str.split('').reverse().join('');
  };
  
  // Log the results with descriptive messages
  console.log(`Reversed "w3resource": ${reverseString("w3resource")}`);
  console.log(`Reversed "www": ${reverseString("www")}`);
  console.log(`Reversed "JavaScript": ${reverseString("JavaScript")}`);
  
  // Additional test cases
  console.log(`Reversed "": ${reverseString("")}`);
  console.log(`Reversed "12345": ${reverseString("12345")}`);
  console.log(`Reversed "Hello, World!": ${reverseString("Hello, World!")}`);
  