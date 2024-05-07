const today = new Date();

// Get the day of the week
const day = today.toLocaleDateString('en-US', { weekday: 'long' });

// Get the current hour
let hour = today.getHours();

// Get the current minute
const minute = today.getMinutes();

// Get the current second
const second = today.getSeconds();

// Determine if  AM or PM
const prepand = (hour >= 12) ? " PM" : " AM";

// convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Handle special case when hour is 0
hour = (hour === 0) ? 12 : hour;

console.log(`Today is: ${day}.`);

console.log(`Current Time: ${hour}${prepand} : ${minute} : ${second}`);
