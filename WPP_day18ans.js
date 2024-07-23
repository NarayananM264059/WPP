// Function to find the maximum difference between any two adjacent elements
const arrayMaxDiff = (arr) => {
    if (arr.length < 2) return 0; 
    
    let maxDiff = 0; 
    
    // Iterate through the array, comparing each element with its next element
    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]); 
        maxDiff = Math.max(maxDiff, diff); 
    }
    
    return maxDiff; 
};

console.log(arrayMaxDiff([1, 2, 3, 8, 9])); 
console.log(arrayMaxDiff([1, 2, 9, 12, 9])); 
console.log(arrayMaxDiff([13, 2, 3, 8, 9])); 
