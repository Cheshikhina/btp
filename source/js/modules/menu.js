// import overlay from './overlay';

const menu = (selectorsTrigger) => {
  const selectorBlock = '.header__main',
    btnsToggle = document.querySelectorAll(selectorsTrigger),
    triggerBlock = document.querySelector(selectorBlock);

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
};

export default menu;
