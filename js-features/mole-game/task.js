'use strict';

let getHole = index => document.getElementById(`hole${index}`)

for (let index = 1; index < 10; index++) {
  getHole(index).addEventListener('click', () => {
    if (getHole(index).className.includes('hole hole_has-mole')) {
      document.getElementById('dead').textContent++;
    } else {
      document.getElementById('lost').textContent++;
    }
    if (document.getElementById('dead').textContent == 10) {
      alert('Вы выиграли!!!');
      document.getElementById('lost').textContent = 0;
      document.getElementById('dead').textContent = 0;
    } if (document.getElementById('lost').textContent == 5) {
      alert('Вы проиграли!!!');
      document.getElementById('lost').textContent = 0;
      document.getElementById('dead').textContent = 0;
    }
  })
}
