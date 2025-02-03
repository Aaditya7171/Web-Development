// arr.join: Creates and returns a new string by concatenating all elements in an array, separated by a specified separator
var arr = ["apple", "banana", "orange"];
var joinedString = arr.join(", "); // Joins array elements with ", " as separator
console.log(joinedString); // Output: "apple, banana, orange"

// Explanation using if-else:
var arr = ["apple", "banana", "orange"];
var joinedString = "";
if (arr.length > 0) {
    // If the array has elements, concatenate them into a string
    joinedString = arr.join(", ");
} else {
    // If the array is empty, set the joinedString to a default value or handle the empty case
    joinedString = "Array is empty";
}
console.log(joinedString); // Output: "apple, banana, orange"
