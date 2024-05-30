function startsWithJava(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
      return 'Input must be a string';
    }
  
    // Check if the string starts with 'Java'
    if (str.startsWith('Java')) {
      return true;
    } else {
      return false;
    }
  }

console.log(startsWithJava("Python"));
console.log(startsWithJava("Java"));
console.log(startsWithJava(123));