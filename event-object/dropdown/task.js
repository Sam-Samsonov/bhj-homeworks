const drDown = document.querySelectorAll('.dropdown__list');
const divD = document.querySelectorAll('.dropdown__value');
//const actMenu = document.querySelectorAll('.dropdown');


divD.forEach(el => el.addEventListener('click', () => {
  el.nextElementSibling.classList.toggle('dropdown__list_active');
}))

const changeList = function(event) {
  const prevEl = event.currentTarget.previousElementSibling;
  event.preventDefault();
  prevEl.textContent = event.target.textContent;
  event.currentTarget.classList.remove('dropdown__list_active');
}

drDown.forEach(elem => elem.addEventListener('click', changeList));
