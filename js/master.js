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

function Player(name, currentHand, totalScore){
    this.name = name;
    this.currentHand = currentHand;
    this.totalScore = totalScore;
}

Player.prototype.newTotalScore = function(){
  return this.totalScore = this.startingScore + this.currentHand;
};

pigDice(dice());

//User Interface
$(document).ready(function(){


  //click event for hiding the start screen and hiding the game screen
  $("#startGame").click(function(event) {
    $(".startScreen").slideUp();
    $(".gameScreen").show();

    //Receive user input for player names
    var player1object_name = $("#player1name").val();
    var player2object_name = $("#player2name").val();
    //give user input name to a new objects, and display on game screen
    var player1info = new Player(player1object_name);
    var player2info = new Player(player2object_name);

    //display player names on game screen
    $("#inputPlayer1name").text(player1object_name);
    $("#inputPlayer2name").text(player2object_name);

    //set initial turn score to 0 upon opening game screen
    $("#currentTurn1").val(0);
    $("#currentTurn2").val(0);

    //set initial turn score to 0 upon opening game screen
    $("#totalScore1").val(0);
    $("#totalScore2").val(0);

    //click event for player1 rolling the dice
      $("#player1roll").click(function(event) {

        //variable
        var dice1 = dice();

        if (dice1 === 1){
        $("#player1roll").prop("disabled", true);
        };

        //set initial turn score to 0 upon opening game screen
        $("#currentRoll1").val(dice1);


      event.preventDefault;
    });
  });
});
