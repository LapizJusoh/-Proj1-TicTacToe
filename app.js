document.addEventListener("DOMContentLoaded", function() {

  // Declare Players

  class Player {
    constructor (color) {
      this.name = ``;
      this.score = 0;
      this.color = color
    }

    changePlayer()  {
      if (this == play1) {
        currentPlayer = play2;
      } else if (this == play2) {
        currentPlayer = play1;
      }
    }

  }
 


  // display player names when they input their names and click the submit button

  document.getElementById(`submitPlay1Name`).addEventListener('click', () => {
    play1.name = document.getElementById(`player1-name`).value;
    document.getElementById(`displayPlay1Name`).innerText = ` ${play1.name}`;
    document.getElementById(`player1-name`).style.display = `none`;
    document.getElementById(`submitPlay1Name`).style.display = `none`;
  })
  
  document.getElementById(`submitPlay2Name`).addEventListener('click', () => {
    play2.name = document.getElementById(`player2-name`).value;
    document.getElementById(`displayPlay2Name`).innerText = ` Welcome back, ${play2.name}`;
    document.getElementById(`player2-name`).style.display = `none`;
    document.getElementById(`submitPlay2Name`).style.display = `none`;
  })

  // check win condition

  const checkEndCondition = () => {

    for(let i =0; i < 3; i++) {
      if(
        ( (boxArr[i][0].style.backgroundColor == currentPlayer.color) && (boxArr[i][1].style.backgroundColor == currentPlayer.color) && (boxArr[i][2].style.backgroundColor == currentPlayer.color) ) ||
        ( (boxArr[0][i].style.backgroundColor == currentPlayer.color) && (boxArr[1][i].style.backgroundColor == currentPlayer.color) && (boxArr[2][i].style.backgroundColor == currentPlayer.color) ) ||
        ( (boxArr[0][0].style.backgroundColor == currentPlayer.color) && (boxArr[1][1].style.backgroundColor == currentPlayer.color) && (boxArr[2][2].style.backgroundColor == currentPlayer.color) ) ||
        ( (boxArr[0][2].style.backgroundColor == currentPlayer.color) && (boxArr[1][1].style.backgroundColor == currentPlayer.color) && (boxArr[2][0].style.backgroundColor == currentPlayer.color) )
      ) {
        document.getElementById(`result`).innerHTML = `That's a match three! ${currentPlayer.name} won!`;
        isWon = true;
      }

      if ( ( boxArr[0].every( (element) => element.style.backgroundColor != `white`) ) &&
      ( boxArr[1].every( (element) => element.style.backgroundColor != `white`) ) &&
      ( boxArr[2].every( (element) => element.style.backgroundColor != `white`) ) ) {
        document.getElementById(`result`).innerHTML = `All the boxes are filled up! It's a tie!`
        isADraw = true;
      }
    }
  }
  
  // setting variables

  const play1 = new Player('red');
  const play2 = new Player('blue');
  let isWon = false; // while the game is not yet won
  let isADraw = false; // while the game did not end in a draw
  let currentPlayer = play1; // shows current player's turn

  /*
  Assign the div box ID into arrays. Example:
    boxArr[0][0] = document.getElementById(`box00`);
    boxArr[0][1] = document.getElementById(`box01`);
  */

    let boxArr = [];

    for(let i = 0; i < 3; i++) {
      boxArr.push([]);
      for(let j = 0; j < 3; j++) {
        boxArr[i].push(document.getElementById(`box${i}${j}`))
        boxArr[i][j].style.backgroundColor = `white`;
        boxArr[i][j].style.cursor = `pointer`;
      }
    }

  // on click and if nobody wins yet, change box color.

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      boxArr[i][j].addEventListener(`click`, () => {
        if ( (!isWon) && (!isADraw) ) {
            if (boxArr[i][j].style.backgroundColor == `white`) {
              boxArr[i][j].style.backgroundColor = currentPlayer.color;
              boxArr[i][j].style.cursor = `auto`;
              checkEndCondition(); // check for winning condition
              if ( (!isWon) || (!isADraw) ) { 
                currentPlayer.changePlayer();
              }
            }
        }
      })
    }
  }
})