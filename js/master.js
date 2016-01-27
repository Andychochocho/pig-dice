// Business Logic
function dice(){
    return Math.floor((Math.random() * 6) + 1);
}


function pigDice(num){
    if(num === 1){
        return 1;
    } else if (num === 2){
        return 2;
    } else if(num === 3){
        return 3;
    } else if(num === 4){
        return 4;
    } else if(num === 5){
        return 5;
    } else {
        return 6;
    }
}

function PlayerOne(name, currentHand, totalScore){
    this.name = name;
    this.currentHand = currentHand;
    this.totalScore = totalScore;
}

PlayerOne.prototype.newTotalScore = function(){
  return this.totalScore = this.startingScore + this.currentHand;
};

// Roll.prototype. === function(){
//   return this.currentHand += playerRoll;
// };

// function PlayerTwo(name, currentHand, totalScore){
//     this.name = name;
//     this.currentHand = currentHand;
//     this.totalScore = totalScore;
// }

pigDice(dice());

//User Interface
$(document).ready(function(){
  $("#startGame").click(function(event) {
    $(".startScreen").slideUp();
    $(".gameScreen").show();


  $("#player1roll").click(function(event) {
    var playerOneName = prompt("What is your name playa?");
    var startingScore = 0;

    $("totalScore1").val(startingScore);

    event.preventDefault;
  });
  });
});
