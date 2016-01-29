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
    this.currentHand = currentHand; //function() {}
    this.totalScore = totalScore;
}

Player.prototype.RollDie = function() {
  return this.currentHand = Math.floor((Math.random() * 6) + 1);
}





// pigDice

//User Interface
$(document).ready(function(){

  //click event for hiding the start screen and hiding the game screen
  $("#startGame").click(function(event) {

    //Receive user input for player names
    var player1object_name = $("#player1name").val();
    var player2object_name = $("#player2name").val();
    //give user input name to a new objects, and display on game screen
    var player1info = new Player(player1object_name, 0, 0);
    var player2info = new Player(player2object_name, 0, 0);


    //if else alerting user if nothing was entered for either player's name
    if (player1object_name.length === 0 || player2object_name.length === 0) {
      alert("Please enter a name for both players!");
    } else {

    $(".startScreen").slideUp();
    $(".gameScreen").show();

    // //Receive user input for player names
    // var player1object_name = $("#player1name").val();
    // var player2object_name = $("#player2name").val();
    // //give user input name to a new objects, and display on game screen
    // var player1info = new Player(player1object_name);
    // var player2info = new Player(player2object_name);

    //display player names on game screen
    $("#inputPlayer1name").text(player1object_name);
    $("#inputPlayer2name").text(player2object_name);

    //set initial turn score upon opening game screen
    $("#currentTurn1").val(player1info.currentHand);
    $("#currentTurn2").val(player2info.currentHand);

    //set initial total score to 0 upon opening game screen
    $("#totalScore1").val(player1info.totalScore);
    $("#totalScore2").val(player2info.totalScore);

    //disable player2's controls on game initiation
    $("#player2roll").prop("disabled", true);
    $("#player2hold").prop("disabled", true);
}

    //click event for player1 rolling the dice
      $("#player1roll").click(function(event) {
        var dice1 = dice();

        Player.prototype.newCurrentScore = function(){
        return this.currentHand = this.currentHand + dice1;
        }
        //variable


        // var current_score = player1info.currentHand + dice1;


        // player1info.newCurrentScore;
// debugger;
        // if (dice1 === 1){
        // $("#player1roll").prop("disabled", true);
        // $("#player2roll").prop("disabled", false);
        // $("#player2hold").prop("disabled", false);
        // };

        //add player 1's roll to the cumulative score for their current hand
        parseInt($("#currentRoll1").val(dice1));
        parseInt($("#currentTurn1").val(player1info.newCurrentScore()));


      event.preventDefault;
    });
    $("#player1hold").click(function(){
      var p1currentHandTotal = parseInt($("#currentTurn1").val());
          // var player2info = new Player(player2object_name, 0, 0);
          Player.prototype.p1TotalScore = function(){
          return this.totalScore = this.totalScore + p1currentHandTotal;
          }
        $("#totalScore1").val(player1info.p1TotalScore());
        $("#currentTurn1").val(0);
        $("#currentRoll1").val(0);


    });
  });
});
