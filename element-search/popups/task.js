'use strict'

document.getElementById("modal_success").className = 'modal modal_active';

let cross = Array.from(document.getElementsByClassName('modal__close'))
function closeMod() {
  document.querySelector('.modal_active').className = 'modal'
}

cross[cross.findIndex(() => {

  }
)].onclick = () => {
  closeMod();
}
