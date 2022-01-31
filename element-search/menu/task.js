'use strict';

const menu = Array.from(document.getElementsByClassName('menu menu_sub'));

menu.forEach(el => el.closest('li').querySelector('.menu__link').onclick = function() {
  const submenu = this.closest('li').querySelector('.menu_sub');
  if (menu.find(elem => elem.classList.contains('menu_active'))) {
    if (menu.find(elem => elem.classList.contains('menu_active')) === submenu) {
      menu.find(elem => elem.classList.remove('menu_active'));
      return false;
    } else {
      menu.find(elem => elem.classList.remove('menu_active'));
      submenu.classList.add('menu_active');
      return false;
    }
  } else {
    submenu.classList.add('menu_active');
    return false;
  }
})
