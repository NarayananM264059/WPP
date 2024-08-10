const remove_duplicate_chars = (str) => {
    // Split the string into an array of characters
    const arr_char = str.split("");
    const result_arr = [];
  
    // Loop through each character of the array
    for (let i = 0; i < arr_char.length; i++) {
      // Check if the first and last occurrence of a character in the string are the same
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
        result_arr.push(arr_char[i]);
    }
  
    // Join the array of unique characters and return as a string
    return result_arr.join("");
  }
console.log(remove_duplicate_chars("pythonoo"));
console.log(remove_duplicate_chars("abcabcvma"));