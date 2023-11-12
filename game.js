var userButtonChoice = [];
var randomButtonChoice = [];
var colors = ["red", "yellow", "green", "blue"];
var level = 0;
//get the color the user click
$(".btn").click(function () {
  userButtonChoice.push(this.id); //red,blue,yellow,green
  setAnimation(this.id);
  chackAnswerClick(userButtonChoice.length - 1);
});

//get the key that press on keyboard
$(document).keydown(function (event) {
  switch (event.key) {
    case "a":
      randomButtonChoice = [];
      level = 0;
      startGame();

      break;

    default:
      break;
  }
});

//Here the game started
function startGame() {
  userButtonChoice = [];
  var numberRandom = Math.random();
  numberRandom = numberRandom * 4;
  numberRandom = Math.floor(numberRandom);

  var randomColor = colors[numberRandom];
  randomButtonChoice.push(randomColor); // push color for stack

  setAnimation(randomColor);
}

//this function give animation for the webpage
function setAnimation(nameColor) {
  //adding class pressed style into square
  $("#" + nameColor).addClass("pressed");

  //get the animation
  setTimeout(function () {
    $("#" + nameColor).removeClass("pressed");
  }, 100);
}

function chackAnswerClick(index) {
  if (randomButtonChoice[index] == userButtonChoice[index]) {
    if (randomButtonChoice.length == userButtonChoice.length) {
      upLevel();
      setTimeout(() => {
        startGame();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function upLevel() {
  level++;
  $("#level-title").text("level " + level);
}

function gameOver() {
  $("body").addClass("game-over");
  $("h1").text("You Lose Try Again!");
  tryAgain();
}

function tryAgain() {
  setTimeout(() => {
    $("h1").text("Press A Key to Start");
    $("body").removeClass("game-over");
  }, 1000);
  startGame();
}
