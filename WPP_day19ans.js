// Function to find the mode (most frequent element) in an array
const arrayElementMode = (arr) => {
    const ctr = new Array(10).fill(0); 
    let ans = 0; 

    // Iterate through the input array to count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        ctr[arr[i] - 1]++; 
        if (ctr[arr[i] - 1] > ctr[ans]) {
            ans = arr[i] - 1; 
        }
    }
    // Return the mode (element with the highest count)
    return ans + 1; 
};

// Example usage
console.log(arrayElementMode([1, 2, 3, 2, 2, 8, 1, 9]));
console.log(arrayElementMode([9, 9, 3, 2, 2, 8, 3, 9]));
console.log(arrayElementMode([8, 2, 3, 2, 3, 8, 3, 9]));