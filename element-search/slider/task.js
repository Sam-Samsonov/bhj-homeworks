'use strict';

const arrSli = Array.from(document.getElementsByClassName('slider__item'));
const arrowPrev = document.getElementsByClassName('slider__arrow_prev')[0];
const arrowNext = document.getElementsByClassName('slider__arrow_next')[0];
let indS = 0;

function actNext(indS) {
  arrSli.forEach(el => {
    if (el.classList.contains('slider__item_active')) {
      el.classList.remove('slider__item_active');
    }
    arrSli[indS].classList.add('slider__item_active');
  })
}

arrowNext.onclick = function() {
  if (indS === arrSli.length - 1) {
    indS = 0;
    actNext(indS);
  } else {
    indS += 1;
    actNext(indS);
  }
}

arrowPrev.onclick = function() {
  if (indS === 0) {
    indS = arrSli.length - 1;
    actNext(indS);
  } else {
    indS -= 1;
    actNext(indS);
  }
}
