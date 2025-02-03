// Function to calculate the number of milk bottles to buy and return the change
function getMilk(money, costPerBottle) {
    // Instructions for the robot to leave the house, buy milk, and return home
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calcBottles(money, costPerBottle) + " Bottles of Milk");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    // Return the change after buying the milk
    return calcChange(money, costPerBottle);
}

// Function to calculate the number of bottles based on the starting money and cost per bottle
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

// Function to calculate the change after buying milk
function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}

// Print the change after buying milk
console.log("Hello gentleman, here is your $" + getMilk(12, 2.5) + " change");
