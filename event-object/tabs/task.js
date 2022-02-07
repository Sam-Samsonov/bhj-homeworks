const tab = document.querySelectorAll('.tab');

const handler = function(evt) {
  const parant = evt.target.closest('.tabs');
  const actTab = parant.querySelector('.tab_active');
  const actText = parant.querySelector('.tab__content_active');
  const textNew = parant.querySelectorAll('.tab__content')
  const allTab = Array.from(parant.querySelectorAll('.tab'));
  const index = allTab.indexOf(evt.target);

  if (actTab) {
    if (actTab === evt.target) return;
    actTab.classList.remove('tab_active');
    actText.classList.remove('tab__content_active');
    evt.target.classList.add('tab_active');
    textNew[index].classList.add('tab__content_active');
  }
}

tab.forEach(el => el.addEventListener('click', handler));
