// var userClickedPattern=[];
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// function playSound(name)
// {
//   $(".btn").click(function(){
//       name=this.id;
//       var audio = new Audio("sounds/"+name+".mp3");
//       audio.play();
//   });
// }
// playSound(name);
// function nextSequence() {
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   //1. Use jQuery to select the button with the same id as the randomChosenColour
//   //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//   // var audio = new Audio("sounds/blue.mp3");
//   // audio.play();
//   playSound(randomChosenColour);
// }
// nextSequence();
//
// $(".btn").click(function(){
//     var userChosenColour=this.id;
//     userClickedPattern.push(userChosenColour);
//     console.log(userClickedPattern);
// });

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
nextSequence();
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
function animatePress(currentColour){
  $(".btn").click(function(){
    currentColour = $(this).attr("id");
    $("#" + currentColour).addClass("pressed");
    $("#" + currentColour).removeClass("pressed");
  },100);
}
animatePress();
