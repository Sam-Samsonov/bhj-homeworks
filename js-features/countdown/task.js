'use strict';

/* Основное задание
let counter = document.getElementById('timer');
let counterInt = setInterval(() => {
  counter.textContent = counter.textContent - 1;
  if (counter.textContent <= 0) {
    clearInterval(counterInt);
    alert('Вы победили в конкурсе');
  }
}, 1000);*/

const counter = document.getElementById('timer');
const counterInt = setInterval(() => {

  counter.textContent = new Date(new Date(2020, 1, 1, 15, 52, 59) - new Date()).toLocaleTimeString('ru-Ru', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
if (counter.textContent == '00:00:00') {
  clearInterval(counterInt);
  const hint = document.getElementById('hint');
  hint.href = 'http://_hello.kitty';
  hint.click();
  //  alert('Вы победили в конкурсе');
}
}, 1000);
