/* eslint-disable linebreak-style */
const openMenu = document.querySelector('.menu');

const navItem = document.querySelectorAll('.item');
const menuCont = document.querySelector('.menu-items');
const closeMenu = document.querySelector('.close');
function openMobMenu() {
  menuCont.classList.add('menu-open');
}
openMenu.addEventListener('click', openMobMenu);
function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}
closeMenu.addEventListener('click', closeMobMenu);

navItem.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMobMenu);
});
