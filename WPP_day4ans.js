function daysUntilChristmas() {
    // Get today's date
    const today = new Date();
    
    // Get the current year
    const currentYear = today.getFullYear();
    
    // Set the date for this year's Christmas
    let christmas = new Date(currentYear, 11, 25); // December 25th
    
    // If today's date is after Christmas, set for next year's Christmas
    if (today > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
    }
    
    // Calculate the difference in time (milliseconds)
    const timeDifference = christmas - today;
    
    // Convert milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysDifference;
}

var days=daysUntilChristmas()
// Output the result
console.log( days , "days left until Christmas!");
