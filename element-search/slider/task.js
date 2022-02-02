'use strict';

const arrSli = Array.from(document.getElementsByClassName('slider__item'));
const arrDot = Array.from(document.getElementsByClassName('slider__dot'));
const arrowPrev = document.getElementsByClassName('slider__arrow_prev')[0];
const arrowNext = document.getElementsByClassName('slider__arrow_next')[0];
let ind = arrSli.findIndex(() => document.querySelector('.slider__item_active'));
arrDot[ind].classList.add("slider__dot_active");

function actNext(newInd) {
  arrSli[ind].classList.remove('slider__item_active')
  arrDot[ind].classList.remove('slider__dot_active')
  arrSli[newInd].classList.add('slider__item_active');
  arrDot[newInd].classList.add('slider__dot_active');
  ind = newInd;
}

arrowNext.onclick = function() {
  let newInd = ind;
  if (ind === arrSli.length - 1) {
      newInd = 0;
  } else {
      newInd += 1;
  }
  actNext(newInd);
}

arrowPrev.onclick = function() {
  let newInd = ind;
  if (ind === 0) {
      newInd = arrSli.length - 1;
  } else {
      newInd -= 1;
  }
  actNext(newInd);
}

arrDot.forEach(el => el.onclick = function() {
  let newInd = arrDot.indexOf(this);
  actNext(newInd);
})

/*const arrSli = Array.from(document.getElementsByClassName('slider__item'));
const arrDot = Array.from(document.getElementsByClassName('slider__dot'))
const arrowPrev = document.getElementsByClassName('slider__arrow_prev')[0];
const arrowNext = document.getElementsByClassName('slider__arrow_next')[0];
let indS = 0;

arrDot[indS].classList.add("slider__dot_active");

function actNext(arg) {
  arrSli.forEach(el => {
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

for (let i = 0; i < arrDot.length; i++) {
  arrDot[i].onclick = function() {
    indS = i;
    actNext(indS);
  }
}*/
