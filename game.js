var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
var gameStatus=0;
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  nextSequence();
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

  $("h1").text("level"+" "+level);
  level+=1;
}

function animatePress(currentColour){
  $(".btn").click(function(){
    currentColour = $(this).attr("id");
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
  });

}
animatePress();
$(document).on('keypress',function(e) {
    if(e.key === "a" && gameStatus==0) {
      $("h1").text("level"+" "+level);
        nextSequence();
        gameStatus=1;



    }
});
