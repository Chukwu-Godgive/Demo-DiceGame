document.getElementById("btn").addEventListener("click", demoDiceGame);

function demoDiceGame() {
    // Hides the game welcome greetings
    document.getElementById("hidden").innerHTML = ""
  // PLAYER 1
  let game1 = Math.random();
  game1 = game1 * 6;
  game1 = Math.floor(game1) + 1;
  // Conditional statement for PLAYER1
  if (game1 === 1) {
    let view1Player1 = document.querySelector("img.dice-face1"); //this selects img element from html.
    view1Player1.src = "./images/dices/dice-one.png"; //view1.src assigns the image to the html src
  } else if (game1 === 2) {
    let view2Player1 = document.querySelector("img.dice-face1");
    view2Player1.src = "./images/dices/dice-two.png";
  } else if (game1 === 3) {
    let view3Player1 = document.querySelector("img.dice-face1");
    view3Player1.src = "./images/dices/dice-three.png";
  } else if (game1 === 4) {
    let view4Player1 = document.querySelector("img.dice-face1");
    view4Player1.src = "./images/dices/dice-four.png";
  } else if (game1 === 5) {
    let view5Player1 = document.querySelector("img.dice-face1");
    view5Player1.src = "./images/dices/dice-five.png";
  } else {
    let view6Player1 = document.querySelector("img.dice-face1");
    view6Player1.src = "./images/dices/dice-six.png";
  }

  // PLAYER 2
  let game2 = Math.random();
  game2 = game2 * 6;
  game2 = Math.floor(game2) + 1;
  // Conditional statement for PLAYER2
  if (game2 === 1) {
    let view1Player2 = document.querySelector("img.dice-face2"); //this selects img element from html.
    view1Player2.src = "./images/dices/dice-one.png"; //view1.src assigns the image to the html src
  } else if (game2 === 2) {
    let view2Player2 = document.querySelector("img.dice-face2");
    view2Player2.src = "./images/dices/dice-two.png";
  } else if (game2 === 3) {
    let view3Player2 = document.querySelector("img.dice-face2");
    view3Player2.src = "./images/dices/dice-three.png";
  } else if (game2 === 4) {
    let view4Player2 = document.querySelector("img.dice-face2");
    view4Player2.src = "./images/dices/dice-four.png";
  } else if (game2 === 5) {
    let view5Player2 = document.querySelector("img.dice-face2");
    view5Player2.src = "./images/dices/dice-five.png";
  } else {
    let view6Player2 = document.querySelector("img.dice-face2");
    view6Player2.src = "./images/dices/dice-six.png";
  }

  // The conditional statement handles the display of winners.
  if (game1 > game2) {
    document.getElementById("winner").textContent = "Player 1 Wins";
    let winner000 = document.querySelector("img.trophy");
    winner000.src = "./images/trophy.png";
  } else if (game1 === game2) {
    document.getElementById("winner").textContent = "Both Team Draw";
    let winner001 = document.querySelector("img.trophy");
    winner001.src = "";
  } else {
    document.getElementById("winner").textContent = "Player 2 Wins";
    let winner011 = document.querySelector("img.trophy");
    winner011.src = "./images/trophy.png";
  }
}
