'use strict';

const arrSli = Array.from(document.getElementsByClassName('slider__item'));
const arrDot = Array.from(document.getElementsByClassName('slider__dot'))
const arrowPrev = document.getElementsByClassName('slider__arrow_prev')[0];
const arrowNext = document.getElementsByClassName('slider__arrow_next')[0];
let indS = 0;

arrDot[indS].classList.add("slider__dot_active");

function actNext(arg) {
  arrSli.find(el => {
    if (el.classList.contains('slider__item_active')) {
      el.classList.remove('slider__item_active');
    }
  arrDot.find(el => {
    if (el.classList.contains('slider__dot_active')) {
      el.classList.remove('slider__dot_active');
    }
  })
    arrSli[arg].classList.add('slider__item_active');
    arrDot[arg].classList.add('slider__dot_active');
  })
}

arrowNext.onclick = function() {
  if (indS === arrSli.length - 1) {
      indS = 0;
  } else {
      indS += 1;
  }
  actNext(indS);
}

arrowPrev.onclick = function() {
  if (indS === 0) {
      indS = arrSli.length - 1;
  } else {
      indS -= 1;
  }
  actNext(indS);
}

// Попытка задать через forEach
/*arrDot.forEach((el, i) => el[i].onclick = function() {
  return actNext(i);
})*/

for (let i = 0; i < arrDot.length; i++) {
  arrDot[i].onclick = function() {
    actNext(i);
  }
}
