'use strict';

const gif = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let firstClick = 0;

gif.onclick = function() {
  let lastClick = new Date();
  switch (gif.width) {
    case 200:
      gif.width = 250;
      break;
    default:
      gif.width = 200;
      break;
  }
  clicker.textContent++;

  if (firstClick == 0) {
    firstClick = new Date();
  }

  speed.textContent = (clicker.textContent / ((lastClick - firstClick) / 1000)).toFixed(3);
}
