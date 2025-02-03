function isLeap(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If divisible by 4, further check if it's divisible by 100 and 400 for exception cases
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            // If divisible by 400 or not divisible by 100, it's a leap year
            return "Leap year.";
        } else {
            // If divisible by 100 but not divisible by 400, it's not a leap year
            return "Not leap year.";
        }
    } else {
        // If not divisible by 4, it's definitely not a leap year
        return "Not leap year.";
    }
}
// Call isLeap function with example years
console.log(isLeap(2020)); // Output: Leap year.
console.log(isLeap(2021)); // Output: Not leap year.