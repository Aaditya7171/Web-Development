// Function to calculate BMI (Body Mass Index) based on weight (in kg) and height (in meters)
function bmiCalculator(weight, height) {
    // Calculate BMI using the formula: weight / (height * height)
    var bmi = weight / (height * height);

    // Check BMI range and provide appropriate message
    if (bmi < 18.5) {
        console.log("Your BMI is " + bmi + ", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Your BMI is " + bmi + ", so you have a healthy weight.");
    } else {
        console.log("Your BMI is " + bmi + ", so you are overweight.");
    }

    // Return the calculated BMI
    return bmi;
}

// Call the bmiCalculator function with weight 55 kg and height 1.7 meters
var calculatedBMI = bmiCalculator(55, 1.7);

// Print the calculated BMI
console.log("Your calculated BMI is: " + calculatedBMI);
