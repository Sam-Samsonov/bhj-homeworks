'use strict';

const getHole = index => document.getElementById(`hole${index}`);
const lose = document.getElementById('lost');
const win = document.getElementById('dead');
function gameOver(text) {
  alert(text);
  lose.textContent = 0;
  win.textContent = 0;
}

for (let index = 1; index < 10; index++) {
  getHole(index).addEventListener('click', () => {
    if (getHole(index).className.includes('hole hole_has-mole')) {
      win.textContent++;
    } else {
      lose.textContent++;
    }
    if (win.textContent == 10) {
      gameOver('Вы выиграли!!!');

    } if (lose.textContent == 5) {
      gameOver('Вы проиграли!!!');
    }
  })
}
