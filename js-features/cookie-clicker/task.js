'use strict';

let gif = document.getElementById('cookie');
let clicker = document.getElementById('clicker__counter');
let speed = document.getElementById('clicker__speed');
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

  speed.textContent = (((lastClick - firstClick) / 1000) / clicker.textContent).toFixed(3);
}
