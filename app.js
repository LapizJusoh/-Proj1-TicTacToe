document.addEventListener("DOMContentLoaded", function() {

  // display player names when they input their names and click the submit button

  let play1 = `Player 1`;
  let play2 = `Player 2`;

  document.getElementById(`submitPlay1Name`).addEventListener('click', () => {
    play1 = document.getElementById(`player1-name`).value;
    document.getElementById(`displayPlay1Name`).innerText = ` Welcome back, ${play1}`;
    document.getElementById(`player1-name`).value = ``;
  })
  
  document.getElementById(`submitPlay2Name`).addEventListener('click', () => {
    play2 = document.getElementById(`player2-name`).value;
    document.getElementById(`displayPlay2Name`).innerText = ` Welcome back, ${play2}`;
    document.getElementById(`player2-name`).value = ``;
  })

  /*
  Assign the div box ID into arrays. Example:
    boxArr[0][0] = document.getElementById(`box00`);
    boxArr[0][1] = document.getElementById(`box01`);
  */

  let boxArr = [];
  let isWon = false;

  for(let i = 0; i < 3; i++) {
    boxArr.push([]);
    for(let j = 0; j < 3; j++) {
      boxArr[i].push(document.getElementById(`box${i}${j}`))
    }
  }

  // on click, change box color

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      boxArr[i][j].addEventListener(`click`, () => {
        if (!isWon) {
        boxArr[i][j].style.backgroundColor = `red`;
        checkMatchThree();
        }
      })
      
    }
  }

  const checkMatchThree = () => {
    if (
      ( (boxArr[0][0].style.backgroundColor == 'red') && (boxArr[0][1].style.backgroundColor == 'red') && (boxArr[0][2].style.backgroundColor == 'red') ) ||
      ( (boxArr[1][0].style.backgroundColor == 'red') && (boxArr[1][1].style.backgroundColor == 'red') && (boxArr[1][2].style.backgroundColor == 'red') ) ||
      ( (boxArr[2][0].style.backgroundColor == 'red') && (boxArr[2][1].style.backgroundColor == 'red') && (boxArr[2][2].style.backgroundColor == 'red') ) ||
      ( (boxArr[0][0].style.backgroundColor == 'red') && (boxArr[1][1].style.backgroundColor == 'red') && (boxArr[2][2].style.backgroundColor == 'red') ) ||
      ( (boxArr[2][0].style.backgroundColor == 'red') && (boxArr[1][1].style.backgroundColor == 'red') && (boxArr[0][2].style.backgroundColor == 'red') ) ||
      ( (boxArr[0][0].style.backgroundColor == 'red') && (boxArr[1][0].style.backgroundColor == 'red') && (boxArr[2][0].style.backgroundColor == 'red') ) ||
      ( (boxArr[0][1].style.backgroundColor == 'red') && (boxArr[1][1].style.backgroundColor == 'red') && (boxArr[2][1].style.backgroundColor == 'red') ) ||
      ( (boxArr[0][2].style.backgroundColor == 'red') && (boxArr[1][2].style.backgroundColor == 'red') && (boxArr[2][2].style.backgroundColor == 'red') )
    ){
      document.getElementById(`result`).innerHTML = `That's a match three! ${play1} won!`;
      isWon = true;
    }
  }

})

  // document.getElementsByClassName(`box`).addEventListener(`click`, (e) => {
  //   e.target.style.backgroundColor = `red`;
  // })






