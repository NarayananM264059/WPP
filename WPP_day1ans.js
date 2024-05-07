const today = new Date();
const day = today.toLocaleDateString('en-US', { weekday: 'long' });
const time = today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
console.log(`Today is: ${day}.`);
console.log(`Current time is: ${time}.`);
