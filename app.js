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


  
})