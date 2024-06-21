const findClosestTo100 = (x, y) => {
    // Check if x is equal to y
    if (x === y) {
      // Return false if x is equal to y
      return false;
    }
  
    // Calculate the absolute difference between x and 100
    const diffX = Math.abs(x - 100);
  
    // Calculate the absolute difference between y and 100
    const diffY = Math.abs(y - 100);
  
    // Compare the differences to determine which value is closer to 100
    if (diffX < diffY) {
      return x;
    } else if (diffY < diffX) {
      return y;
    } else {
      return 0; // Return 0 if both are equidistant from 100
    }
  };
  
  // Log the results with descriptive messages
  console.log(`Closest to 100 between 10 and 89: ${findClosestTo100(10, 89)}`);
  console.log(`Closest to 100 between -90 and -89: ${findClosestTo100(-90, -89)}`);
  console.log(`Closest to 100 between 90 and 90: ${findClosestTo100(90, 90)}`);
  