// Define a function named sum_three with a parameter nums using arrow function syntax
const sum_three = nums => {
    const [num1, num2, num3] = nums;
    // Return the sum of the three numbers
    return num1 + num2 + num3;
};

// Call the function with sample arguments and log the results to the console
console.log(sum_three([10, 32, 20]));
console.log(sum_three([15, 7, 9]));
console.log(sum_three([0, 58, -11]));