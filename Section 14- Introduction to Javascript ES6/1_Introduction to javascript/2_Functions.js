//The karel Robot-->// Prompt the user to enter the amount of money they want to give to the robot.
var money = prompt("Enter how much money do you wanna give to your Robot..")

// Define a function named getMilk that takes the number of bottles of milk as input.
function getMilk(numOfBottles) {
    // Instructions for the robot to leave the house and go to the store.
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    // Buy the specified number of bottles of milk.
    console.log("buy " + numOfBottles +" Bottles of Milk");

    // Instructions for the robot to return home.
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

// Calculate the number of bottles the robot can buy with the given money.
var numOfBottles = Math.floor(money / 2); //$2 for each bottle

// Call the getMilk function with the calculated number of bottles.
getMilk(numOfBottles);


// Prompt the user to enter the amount of money they want to give to the robot.
var money = prompt("Enter how much money do you wanna give to your Robot..")

// Define a function named getMilk that takes the amount of money as input.
function getMilk(money) {
    // Instructions for the robot to leave the house and go to the store.
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    // Call calcBottles function to calculate the number of bottles to buy.
    console.log("buy " + calcBottles(money, 1.5) +" Bottles of Milk");

    // Instructions for the robot to return home.
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    // Return the remaining money after buying the milk.
    return money % 1.5;
}

// Call the getMilk function with the given money.
getMilk(money);

// Define a function named calcBottles that calculates the number of bottles to buy.
function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

