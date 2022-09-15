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

  const play1 = new Player('red');
  const play2 = new Player('blue')
 


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

  const checkMatchThree = () => {

    for(let i =0; i < 3; i++) {
      if(
        ( (boxArr[i][0].style.backgroundColor == 'red') && (boxArr[i][1].style.backgroundColor == 'red') && (boxArr[i][2].style.backgroundColor == 'red') ) ||
        ( (boxArr[0][i].style.backgroundColor == 'red') && (boxArr[1][i].style.backgroundColor == 'red') && (boxArr[2][i].style.backgroundColor == 'red') ) ||
        ( (boxArr[0][0].style.backgroundColor == 'red') && (boxArr[1][1].style.backgroundColor == 'red') && (boxArr[2][2].style.backgroundColor == 'red'))
      ) {
        document.getElementById(`result`).innerHTML = `That's a match three! ${play1.name} won!`;
        isWon = true;
      }
    }
  }
  
  // setting variables

  let isWon = false;
  let currentPlayer = play1;

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
      }
    }

  // on click and if nobody wins yet, change box color.

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      boxArr[i][j].addEventListener(`click`, () => {
        if (!isWon) {
          boxArr[i][j].style.backgroundColor = currentPlayer.color;
          checkMatchThree();
          if (!isWon) {
            currentPlayer.changePlayer();
          }
        }
      })
    }
  }

})

  // document.getElementsByClassName(`box`).addEventListener(`click`, (e) => {
  //   e.target.style.backgroundColor = `red`;
  // })






