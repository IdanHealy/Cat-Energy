const menuButton = document.querySelector(".page-header__button-for-menu-list");
const menu = document.querySelector(".page-header__menu-list");

menuButton.addEventListener("click", e => {
e.preventDefault();
menu.classList.contains('hidden-menu') ?
menu.classList.remove('hidden-menu') :
menu.classList.add('hidden-menu');
menu.classList.contains('hidden-menu') ?
menuButton.classList.remove('button-back-1') || menuButton.classList.add('button-back-0'):
menuButton.classList.add('button-back-1') || menuButton.classList.remove('button-back-0')
});

let TabletWidth = window.matchMedia("(min-width: 768px)")
function menuTabletUnhidden(TabletWidth) {
  if (TabletWidth.matches) {
    menu.classList.remove('hidden-menu')||menuButton.classList.add('button-back-1');
}}

menuTabletUnhidden(TabletWidth);
TabletWidth.addListener(menuTabletUnhidden);

let windowWidth = document.body.clientWidth;
let tabletWidth = 768;
let tableTrue = windowWidth >= tabletWidth;
let buttonBefore = document.querySelector('.button--before');
let buttonAfter = document.querySelector('.button--after');
let range = document.querySelector('.range-for-slider');
let before = document.querySelector('.before');
let after = document.querySelector('.after');

    range.addEventListener('input', () => {
      before.style.width = (100 - range.value) + '%';
      after.style.width = range.value + '%';
    })

    buttonBefore.addEventListener('click', () => {
      before.style.width = '100%';
      after.style.width = '0%';
      range.value = 0;
    })

    buttonAfter.addEventListener('click', () => {
      before.style.width = '0%';
      after.style.width = '100%';
      range.value = 100;
    })


