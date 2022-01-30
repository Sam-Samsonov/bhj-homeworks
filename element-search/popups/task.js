'use strict';

const mainMod = document.getElementById('modal_main');
const btnShow = document.getElementsByClassName('show-success')[0];
const sucMod = document.getElementById('modal_success');
const cross = Array.from(document.getElementsByClassName('modal__close modal__close_times'));

mainMod.className = 'modal modal_active';

btnShow.onclick = () => {
  mainMod.className = 'modal';
  sucMod.className = 'modal modal_active';
}

cross.forEach(elem => elem.onclick = () => {
  elem.parentElement.parentElement.className = 'modal';
})
