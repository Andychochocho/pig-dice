// // If the player rolls a 1, they score nothing and it becomes the next player's turn.
// // If the player rolls any other number, it is added to their turn total and the player's turn continues.
// // We are using objects to push new values
// // If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
//
//
// // USE PROBABILITY OF DICE OF BEING 1
//
// https://mochajs.org/
// // https://pig-dice-timdurward.c9users.io/spec/spec-runner.html
//
describe("PigDice",function(){
  var player1 = new Player("Tim", [], []);
  it("will pass true if pigdice equals 3", function(){
    
    expect(pigDice(3)).to.eql([3]);
  });
    it("will pass true if pigdice equals 5", function(){
    expect(pigDice(5)).to.eql([5]);
  });
    it("will pass true if pigdice equals 1", function(){
    expect(pigDice(1)).to.eql([]);
  });
});

describe("PlayerOne", function(){
  it("will have player1 keep track of temporary score",function(){
    var player1 = new Player("Tim", [], []);
    expect(player1.name).to.equal("Tim");
    expect(player1.tempHand).to.eql([]);
    expect(player1.totalScore).to.equal(0);
  });

  // it("will cumulatively add score from each hand to total score", function(){
  //   expect()
  // });
});

describe("PlayerTwo", function(){
  it("will have player1 keep track of temporary score",function(){
    var player2 = new Player("Rim", [], []);
    expect(player2.name).to.equal("Rim");
    expect(player2.tempHand).to.eql([]);
    expect(player2.totalScore).to.equal(0);
  });
});
