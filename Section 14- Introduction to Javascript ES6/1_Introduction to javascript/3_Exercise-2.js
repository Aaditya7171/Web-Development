//life in weeks-->
var currentAge = prompt("Enter your current age..");

function leftTime(currentAge) {
    var leftYears = (90 - currentAge);
    var leftDays = leftYears * 365;
    var leftWeeks = leftYears * 52;
    var leftMonths = leftYears * 12; 
    console.log("You have " + leftDays +" days, " + leftWeeks + " weeks, and "+ leftMonths + " months left.");
}

leftTime(currentAge);

