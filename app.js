document.addEventListener("DOMContentLoaded", function () {
  // Declare Players

  class Player {
    constructor(color) {
      this.name = ``;
      this.score = 0;
      this.color = color;
    }

    changePlayer() {
      if (this == play1) {
        currentPlayer = play2;
      } else if (this == play2) {
        currentPlayer = play1;
      }

      if (!isWon && !isADraw) {
        document.getElementById(
          `result`
        ).innerHTML = `It is currently ${currentPlayer.name}'s turn`;
      }
    }
  }

  // check win condition

  const checkEndCondition = () => {
    for (let i = 0; i < 3; i++) {
      if (
        (boxArr[i][0].style.backgroundColor == currentPlayer.color &&
          boxArr[i][1].style.backgroundColor == currentPlayer.color &&
          boxArr[i][2].style.backgroundColor == currentPlayer.color) ||
        (boxArr[0][i].style.backgroundColor == currentPlayer.color &&
          boxArr[1][i].style.backgroundColor == currentPlayer.color &&
          boxArr[2][i].style.backgroundColor == currentPlayer.color) ||
        (boxArr[0][0].style.backgroundColor == currentPlayer.color &&
          boxArr[1][1].style.backgroundColor == currentPlayer.color &&
          boxArr[2][2].style.backgroundColor == currentPlayer.color) ||
        (boxArr[0][2].style.backgroundColor == currentPlayer.color &&
          boxArr[1][1].style.backgroundColor == currentPlayer.color &&
          boxArr[2][0].style.backgroundColor == currentPlayer.color)
      ) {
        document.getElementById(
          `result`
        ).innerHTML = `That's a match three! ${currentPlayer.name} won!`;
        isWon = true;
        currentPlayer.score = currentPlayer.score + 1;
        document.getElementById(`display${currentPlayer.color}Score`).innerText = `${currentPlayer.score.toString()}`;
        if (round < maxRound) {
          document.getElementById(`nextRound`).style.display = `inline`;
        }
      }

      if (
        boxArr[0].every(
          (element) => element.style.backgroundColor != `white`
        ) &&
        boxArr[1].every(
          (element) => element.style.backgroundColor != `white`
        ) &&
        boxArr[2].every((element) => element.style.backgroundColor != `white`)
      ) {
        document.getElementById(
          `result`
        ).innerHTML = `All the boxes are filled up! It's a tie!`;
        isADraw = true;
        if (round < maxRound) {
          document.getElementById(`nextRound`).style.display = `inline`;
        }
      }
    }
  };

  // Play next round

  document.getElementById(`nextRound`).addEventListener(`click`, () => {
    round++;
    document.getElementById(`currentRound`).innerText = `Round ${round} of ${maxRound}`;
    isWon = false;
    isADraw = false;
    initialPlayer.changePlayer();
    initialPlayer = currentPlayer;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxArr[i][j].style.backgroundColor = `white`;
      }
    }
    document.getElementById(`nextRound`).style.display = `none`;

  })

  // setting variables

  const play1 = new Player("red");
  const play2 = new Player("blue");
  let isWon = false; // while the game is not yet won
  let isADraw = false; // while the game did not end in a draw
  let currentPlayer = play1; // shows current player's turn
  let initialPlayer = play1;
  let round = 1;
  let maxRound;

  document.getElementById(`result`).innerHTML = `It is currently ${currentPlayer.name}'s turn`; // display current player's turn

  /*
  Assign the div box ID into arrays. Example:
    boxArr[0][0] = document.getElementById(`box00`);
    boxArr[0][1] = document.getElementById(`box01`);
  */

  let boxArr = [];

  for (let i = 0; i < 3; i++) {
    boxArr.push([]);
    for (let j = 0; j < 3; j++) {
      boxArr[i].push(document.getElementById(`box${i}${j}`));
      boxArr[i][j].style.backgroundColor = `white`;
      boxArr[i][j].style.cursor = `pointer`;
    }
  }

  // display player names when they input their names and click the submit button

  document.getElementById(`submitPlay1Name`).addEventListener("click", () => {
    play1.name = document.getElementById(`player1-name`).value;
    document.getElementById(`displayPlay1Name`).innerText = ` ${play1.name}`;
    document.getElementById(`player1-name`).style.display = `none`;
    document.getElementById(`submitPlay1Name`).style.display = `none`;
    if (play1.name != `` && play2.name != ``) {
      document.getElementById(`playGameRequirement`).style.display = `none`;
      document.getElementById(`playGame`).style.display = `inline-block`;
    }
  });

  document.getElementById(`submitPlay2Name`).addEventListener("click", () => {
    play2.name = document.getElementById(`player2-name`).value;
    document.getElementById(`displayPlay2Name`).innerText = ` ${play2.name}`;
    document.getElementById(`player2-name`).style.display = `none`;
    document.getElementById(`submitPlay2Name`).style.display = `none`;
    if (play1.name != `` && play2.name != ``) {
      document.getElementById(`playGameRequirement`).style.display = `none`;
      document.getElementById(`playGame`).style.display = `inline-block`;
    }
  });

  // on pressing the play game button, start game
  document.getElementById(`playGame`).addEventListener(`click`, () => {
    document.getElementById(`result`).innerHTML = `It is currently ${currentPlayer.name}'s turn`;
    document.getElementById(`result`).style.display = `block`;
    maxRound = document.getElementById(`rounds`).value;
    document.getElementById(`currentRound`).innerText = `Round ${round} of ${maxRound}`
    document.getElementById(`game-board`).style.display = `block`;
    document.getElementById(`play1ScoreBoard`).style.color = `red`;
    document.getElementById(`play1ScoreBoard`).innerText = play1.name;
    document.getElementById(`play2ScoreBoard`).style.color = `blue`;
    document.getElementById(`play2ScoreBoard`).innerText = play2.name;
    document.getElementById(`play1Score`).style.display = `inline`;
    document.getElementById(`play2Score`).style.display = `inline`;
    document.getElementById(`roundSelect`).style.display = `none`;
    document.getElementById(`rounds`).style.display = `none`;
    document.getElementById(`playGame`).style.display = `none`;
  })

  // on click and if nobody wins yet, change box color.

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      boxArr[i][j].addEventListener(`click`, () => {
        if (!isWon && !isADraw) {
          if (boxArr[i][j].style.backgroundColor == `white`) {
            boxArr[i][j].style.backgroundColor = currentPlayer.color;
            boxArr[i][j].style.cursor = `auto`;
            checkEndCondition(); // check for winning condition
            if (!isWon || !isADraw) {
              currentPlayer.changePlayer();
            }
          }
        }
      });
    }
  }
});
