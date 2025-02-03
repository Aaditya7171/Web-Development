//getting started with js
// Variable declaration and concatenation
var greetings = "Hello!";
var name = "James";
alert(greetings + " " + name);
name.length; // This line does not have any visible effect as it only returns the length of the 'name' string, it's not being used or logged anywhere.

// Prompt user to enter a string and display the remaining characters out of 140
var string = prompt("Write something here: ");
var size = string.length;
var left_characters = 140 - size;
alert("You have written " + size + " characters. You have " + left_characters + " characters left.");

// Slicing examples
var name = "Selina";
name.slice(0, 1); // Returns: "S"
name.slice(2, 6); // Returns: "lina"

// Prompt user to write a message and limit it to 140 characters
var tweet = prompt("Write a message here");
var taken_Input = tweet.slice(0, 140);
alert(taken_Input);

// Converting case
var name = "James clear";
name.toUpperCase(); // Returns: "JAMES CLEAR"
name.toLowerCase(); // Returns: "james clear"

// Formatting name
var name = prompt("What's your name?");
var first_letter = name.slice(0, 1);
var part_two = name.slice(1, name.length);
var formatted_name1 = first_letter.toUpperCase();
var formatted_name2 = part_two.toLowerCase();
alert("Hey! " + formatted_name1 + formatted_name2);

// Dog to human age converter
var dog_Age = prompt("Enter your Dog's Age (in years)");
var human_Age = ((dog_Age - 2) * 4) + 21;
alert("Your Dog is: " + human_Age + " years old in human age");

// Hit and try with operators
var x = 5;
var y = 3;
alert(x += y); // Output: 8

var x = 4;
var y = ++x; // y is pre-incremented, so y = x + 1 = 5
alert(y += 1); // Output: 6
