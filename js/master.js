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

function PlayerOne(name, tempHand, totalScore){
    this.name = name;
    this.tempHand = tempHand;
    this.totalScore = totalScore;
}

function PlayerTwo(name, tempHand, totalScore){
    this.name = name;
    this.tempHand = tempHand;
    this.totalScore = totalScore;
}



pigDice(dice());
