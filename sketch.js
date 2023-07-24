
let diceResult;
let rolling = false;
let rollButton;
let score = 0;
let answer;


function setup() {
  createCanvas(500, 500);
  

  rollButton = createButton('Start - Roll Dice');
  rollButton.position(100, 400);
  rollButton.mousePressed(rollDice);

  rollButton = createButton('Reset');
  rollButton.position(100, 450);
  rollButton.mousePressed(reset);
}

function draw() {

  fill(255)
  textSize(26)
  text("Dice Guessing Game", 50, 50)
  text("Score:", 50, 100)
  text(score, 140, 100)

  if (rolling) {
    diceResult = floor(random(1, 7))
    displayResult(diceResult);
    answer = floor(random(1, 7))
    if (answer == diceResult) {
      score = score + 1
    }
    else {
      score = score - 1
    }

    if (score > 3) {
    text ("You Win!", 350, 250) 
    }
    else if (score < 0) {
      text ("You Lose..", 350, 250)
    }
    translate(width / 2, height / 2);
    rotate(PI / 3.0);
    fill(255)
    rect(-26, -26, 52, 52);
    
  }

  
 
}
function rollDice() {
  rolling = true;
  setTimeout(() => {
    rolling = false;
  }, 100);
}

function displayResult(result) {
  background(0)
  fill(255);
  textSize(26);
  text('Rolling...', 250, 400)
  text(result, 250, 430 )
  
  }

  
  function reset() {
  background(255)
  score = 0

  }







