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

  //click event for hiding the start screen and hiding the game screen
  $("#startGame").click(function(event) {
    $(".startScreen").slideUp();
    $(".gameScreen").show();

    //set initial turn score to 0 upon opening game screen
    $("#currentTurn1").val(0);
    $("#currentTurn2").val(0);

    //set initial turn score to 0 upon opening game screen
    $("#totalScore1").val(0);
    $("#totalScore2").val(0);

    //click event for player1 rolling the dice
      $("#player1roll").click(function(event) {
        debugger;
        //variable
        var dice1 = dice();
        console.log(dice1);

        //set initial turn score to 0 upon opening game screen
        $("#currentTurn1").val(dice());



        // function dice(score);
        // $("totalScore1").val(startingScore);

      event.preventDefault;
    });
  });
});
