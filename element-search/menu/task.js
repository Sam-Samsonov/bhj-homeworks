'use strict';

const menuLink = Array.from(document.getElementsByClassName('menu__link'));


menuLink.forEach(link => link.onclick = function() {
  if ((this.closest('li').querySelector('.menu_sub')) && (document.querySelector('.menu_active'))) {
    document.querySelector('.menu_active').className = 'menu menu_sub';
    this.closest('li').querySelector('.menu_sub').className = 'menu menu_sub menu_active';
    return false;
  } else if (this.closest('li').querySelector('.menu_sub')) {
    this.closest('li').querySelector('.menu_sub').classList.add('menu_active');
    return false;
  } else if (this.closest('li').querySelector('.menu_active')) {
    this.closest('li').querySelector('.menu_active').classList.remove('menu_active');
    return false;
  }
})
