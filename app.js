document.addEventListener("DOMContentLoaded", function() {

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

  let box00 = document.getElementById(`box00`);
  let box01 = document.getElementById(`box01`);
  let box02 = document.getElementById(`box02`);
  let box10 = document.getElementById(`box10`);
  let box11 = document.getElementById(`box11`);
  let box12 = document.getElementById(`box12`);
  let box20 = document.getElementById(`box20`);
  let box21 = document.getElementById(`box21`);
  let box22 = document.getElementById(`box22`);

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      document.getElementById(`box${i}${j}`).addEventListener(`click`, () => {
        document.getElementById(`box${i}${j}`).style.backgroundColor = `red`;
      })  
    }
  }
  


})



