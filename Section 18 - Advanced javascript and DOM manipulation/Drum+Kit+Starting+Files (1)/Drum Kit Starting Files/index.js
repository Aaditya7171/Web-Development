
// document.querySelector("button").addEventListener("click", handleClick);
// //here, function call is different than usual, it's not a straight-up method call, it'll be called each and every time when event "click" is detected
// function handleClick(){
//     alert("I got clicked");
//     // what to do when click detected
// }

// // another way to do the same(using anonymous function)
// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked using anonymous fun..");
// });

//challenge 1-> write code that gives the alert when we click on any drum
//my solution->
// document.querySelectorAll(".set")[0].addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got clicked");
// }

// //expected solution->
// for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         alert("I got clicked!");
//     });
// }

// //passing function as an input to another function
// function add(num1, num2){
//     return num1+num2;
// }
// function subtract(num1, num2){
//     return num1-num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }
// function divide(num1, num2){
//     return num1/num2;
// }
// function modulo(num1, num2){
//     return num1%num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// //challenge
// for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         this.style.color = "white";
//     });
// }


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

//detecting Button press
// for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
//     var buttonInnerHTML = this.innerHTML;//"this" give the button that has been clicked

//     makeSound(buttonInnerHTML);
    
//     buttonAnimation(buttonInnerHTML);
//     });
// }

// //Detecting Keyboard Press
// document.addEventListener("keydown", function(event){

//     // console.log(event.key);
//     var key = event.key;
//     var pressedkey = key.toLowerCase();
//     makeSound(pressedkey);
//     buttonAnimation(key);

// });

// function makeSound(char){
//     switch(char){
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
        
//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
        
//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;

//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;

//         case "j":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break; 
        
//         case "k":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;

//         case "l":
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;

//         default:
//             console.log(buttonInnerHTML);
//     }
// }

// function buttonAnimation(currentKey){

//     var activeButton = document.querySelector("." + currentKey);

//     activeButton.classList.add("pressed");

//     setTimeout(function(){
//         activeButton.classList.remove("pressed");
//     }, 100);
   
// }

//Minified Code
for(var i=0;i<document.querySelectorAll(".drum").length;i++){document.querySelectorAll(".drum")[i].addEventListener("click",function(){var buttonInnerHTML=this.innerHTML;makeSound(buttonInnerHTML);buttonAnimation(buttonInnerHTML)})}
document.addEventListener("keydown",function(event){var key=event.key;var pressedkey=key.toLowerCase();makeSound(pressedkey);buttonAnimation(key)});function makeSound(char){switch(char){case "w":var tom1=new Audio("sounds/tom-1.mp3");tom1.play();break;case "a":var tom2=new Audio("sounds/tom-2.mp3");tom2.play();break;case "s":var tom3=new Audio("sounds/tom-3.mp3");tom3.play();break;case "d":var tom4=new Audio("sounds/tom-4.mp3");tom4.play();break;case "j":var snare=new Audio("sounds/snare.mp3");snare.play();break;case "k":var crash=new Audio("sounds/crash.mp3");crash.play();break;case "l":var kick=new Audio("sounds/kick-bass.mp3");kick.play();break;default:console.log(buttonInnerHTML)}}
function buttonAnimation(currentKey){var activeButton=document.querySelector("."+currentKey);activeButton.classList.add("pressed");setTimeout(function(){activeButton.classList.remove("pressed")},100)}