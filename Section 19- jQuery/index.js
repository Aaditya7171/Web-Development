// // When script tag is inside the head section, we need to check if our jQuery file is ready before exection, that function only executes the jQuery code when it is ready
// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

// $("h1").css("color", "red");

// //to get the values of the selected element, there should only be "property" inside .css()
// console.log($("h1").css("font-size"));
// console.log($("button").css("font-size"));

// //and to set the values, there should be both inside .css("property", "value")
// $("button").css("background-color", "lime");


// // Instead of adding CSS to jQuery, we can simply include CSS using "addClass"
// $("h1").addClass("big-title");

// //we can remove the class as well using "removeClass"
// $("h1").removeClass("big-title");

//we can multiple classes as well seperating the classes using an space
$("h1").addClass("big-title");

//we can check weather or not if our targeted element has a particular class
// console.log($("h1").hasClass("margin"));


// // Manipulating text with jQuery
// //method 1-->
// $("h1").text("Good Bye!");
// //when we select an element with jQuery, it selects all the elements that match the selector
// $("button").text("Don't click me");
// //adding html
// $("button").html("<em>Heyy</em>");


// //Manipulating Attributes with jQuery
// //getting the value of the attribute
// console.log($("img").attr("src"));
// //setting the value of the attribute(yahoo to youtube)
// $("a").attr("href", "https://www.youtube.com");


// //Adding event listeners to html elements with jQuery
// $("h1").click(function(){//callback funtion
//     $("h1").css("color", "purple");
// });

// //no need to use a loop to add event listener in all the buttons
// $("button").click(function(){
//     $("h1").css("color", "green");
// });

// //detecting keystrokes(inside textbox)
// $("input").keydown(function(e){
//     console.log(e.key);
// });

// //detecting keystrokes(anywhere in the page)
// $(document).keydown(function(e){
//     console.log(e.key);
// });

//  //challenge: when any key is pressed in the webpage, that key should be shown in "h1"
// $(document).keydown(function(e){
//     $("h1").text(e.key);
// });

// //Another way to add event listeners
// $("h1").on("mouseover", function(){
//     $("h1").css("color", "blue");
// });

// //Adding & removing elements with jQuery
// $("h1").before("<button>New Button</button>");//before <h1>
// $("h1").after("<button>New Button</button>");//after </h1>
// $("h1").prepend("<button>New Button</button>");//after <h1> and before content of h1
// $("h1").append("<button>New Button</button>");//after content of h1 and before </h1>

// //removing html elements
// $("button").remove();


// //Adding animations with jQuery
// // hide
// $("button").on("click", function(){
//     $("h1").hide();
// });
// //running below code in console will make the hidden element reapprear
// $("h1").show();

// // toggle
// $("button").on("click", function(){
//     $("h1").toggle();
// });

// //fadeOut
// $("button").on("click", function(){
//     $("h1").fadeOut();
// });
// //it will be reappeared using fadeIn(in conole)
// $("h1").fadeIn();
// //it works with toggle as well
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// });

// //slideUp && slideDown
// $("button").on('click', function(){
//     $("h1").slideUp();
// });
// //slide down brings back the up slided element
// $("button").on('click', function(){
//     $("h1").slideDown();
// });
// //works with toggle as well
// $("button").on('click', function(){
//     $("h1").slideToggle();
// });

// //Animate
// $("button").on('click', function(){
//     $("h1").animate({opacity : 0.5,
//         margin : "20%"
//     });
// });
//chaining the animations
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({margin : "10%"});
});