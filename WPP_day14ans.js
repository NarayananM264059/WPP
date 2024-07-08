// Define a function named first half with parameter str
function first_half(str) {
    // Check if the length of the string is even
    if (str.length % 2 == 0) {
        // Use the slice method to get the first half of the string
        return str.slice(0, str.length / 2);
    } else {
        // If the length is odd, log a message and return null
        console.log("The string is not even:",);
        return str;
    }
}


// Call the function with sample arguments and log the results to the console
console.log(first_half("Python"));     
console.log(first_half("JavaScript"));   
console.log(first_half("PHP"));  
console.log(first_half("moondance"));  