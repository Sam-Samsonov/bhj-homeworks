'use strict'

const mainMod = document.getElementById('modal_main');
const btnShow = document.getElementsByClassName('show-success')[0];
const sucMod = document.getElementById('modal_success')

mainMod.className = 'modal modal_active';

btnShow.onclick = () => {
  mainMod.className = 'modal';
  sucMod.className = 'modal modal_active';
  document.querySelector('.modal_active .modal__content .modal__close');
}

document.querySelector('.modal_active .modal__content .modal__close').onclick = () => {
  const actMod = document.getElementsByClassName('modal_active')[0];
  actMod.className = 'modal';
}
