const menu = (selectorsTrigger) => {
  const selectorBlock = '.header__main',
    btnsToggle = document.querySelectorAll(selectorsTrigger),
    triggerBlock = document.querySelector(selectorBlock);

  function closeMenu() {
    btnsToggle.forEach(item => {
      if (item.classList.contains(item.getAttribute('class').split(' ')[0] + '--click')) {
        item.classList.remove(item.getAttribute('class').split(' ')[0] + '--click');
      }
      if (triggerBlock.classList.contains(selectorBlock.substr(1) + '--' + item.dataset.name)) {
        triggerBlock.classList.remove(selectorBlock.substr(1) + '--' + item.dataset.name);
      }
    });
  }

  function toggleMenu(evt) {
    let btnsСontainClick = document.querySelectorAll('[class *= "--click"]');
    let isClick = evt.target.className.includes('--click');

    btnsСontainClick.forEach(item => {
      item.classList.remove(item.getAttribute('class').split(' ')[0] + '--click');
    });

    if (!isClick) {
      evt.target.classList.add(evt.target.getAttribute('class').split(' ')[0] + '--click');
    }

    if (triggerBlock.classList.contains(selectorBlock.substr(1) + '--' + evt.target.dataset.name)) {
      triggerBlock.classList.remove(selectorBlock.substr(1) + '--' + evt.target.dataset.name);
    } else {

      btnsToggle.forEach(btn => {
        triggerBlock.classList.remove(selectorBlock.substr(1) + '--' + btn.dataset.name);
      });
      triggerBlock.classList.add(selectorBlock.substr(1) + '--' + evt.target.dataset.name);
    }
  }

  btnsToggle.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });

  document.addEventListener('mousedown', function (evt) {
    const blockMenu = document.querySelector(selectorBlock + ' + .header__box .header__menu'),
      btnMenu = document.querySelector('.user__toggle'),
      userMenu = document.querySelector(selectorBlock + '--user '),
      blockNav = document.querySelector(selectorBlock + ' + .header__box  .header__nav'),
      btnNav = document.querySelector('.header__nav_btn'),
      navMenu = document.querySelector(selectorBlock + '--navigation ');
    if (userMenu && evt.target !== blockMenu && evt.target !== btnMenu) {
      closeMenu();
    } else if (navMenu && evt.target !== blockNav && evt.target !== btnNav) {
      closeMenu();
    }
  });
};

export default menu;
