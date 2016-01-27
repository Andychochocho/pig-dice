// // Business Logic
function dice(){
    return Math.floor((Math.random() * 6) + 1);
}

function pigDice(PlayerOne){
    if(PlayerOne === 1){
        return [];
    } else if (PlayerOne === 2){
        PlayerOne.tempHand.push(2);
    } else if(PlayerOne === 3){
        PlayerOne.tempHand.push(3);
    } else if(PlayerOne === 4){
        PlayerOne.tempHand.push(4);
    } else if(PlayerOne === 5){
        PlayerOne.tempHand.push(5);
    } else {
        PlayerOne.tempHand.push(6);
    }
}

function Player(name, totalScore){
    this.name = name;
    this.totalScore = 0;
    this.tempHand = [];
}


pigDice(dice());
//
// Player.prototype.tempHand = function() {
//
// }
//
// Player.prototype.totalScore = function() {
//   return
// }
