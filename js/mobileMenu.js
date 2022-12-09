
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


