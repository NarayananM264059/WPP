function numberOrder(x, y, z) {
    // Check if y is greater than x and z is greater than y
    if (y > x && z > y) {
      return "Strict mode";    
    } 
    // Check if z is greater than y
    else if (z > y) {
      return "Soft mode";
    } 
    // If none of the conditions are met, return "Undefined"
    else {
      return "Undefined";
    }
  }
  
  // Log the results with descriptive messages
  console.log(`Number order for (10, 15, 31): ${numberOrder(10, 15, 31)}`);
  console.log(`Number order for (24, 22, 31): ${numberOrder(24, 22, 31)}`);
  console.log(`Number order for (50, 21, 15): ${numberOrder(50, 21, 15)}`);
  
  // Additional test cases
  console.log(`Number order for (5, 5, 10): ${numberOrder(5, 5, 10)}`);
  