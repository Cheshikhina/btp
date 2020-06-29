import IMask from 'imask';
import overlay from './overlay';
import generateCardNumber from './generateCardNumber';
import copyText from './copyText';
import changeContent from './changeContent';
import multiplyPrice from './multiplyPrice';
import forms from './forms';

const modal = (selectorsTrigger, isGift = false) => {
  let modalWrap, modalInner, modalBtnClose, modalForm;
  const KeyCode = {
      ESC: 27,
    },
    Timeout = {
      now: 1,
      quickly: 300,
      long: 600,
    },
    body = document.querySelector('body');

  function closeModalEsc(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      closeModal();
    }
  }

  function closeModalHandler(evt) {
    if (evt.target.classList.contains('modal')) {
      closeModal();
    }
  }

  function openModal(evt) {
    evt.preventDefault();
    overlay.mainFunction();
    let similarPopup = document.querySelector('#' + selectorsTrigger.substr(1) + '_temp')
      .content
      .querySelector('.modal');
    let popup = similarPopup.cloneNode(true);
    body.appendChild(popup);

    modalWrap = document.querySelector('.modal');
    modalInner = document.querySelector('.modal__content');
    modalBtnClose = modalWrap.querySelector('.modal__close');
    modalForm = modalWrap.querySelector('form');

    switch (selectorsTrigger.substr(1)) {
      case 'gift':
        modalWrap.querySelector('.modal__card_number span').textContent = generateCardNumber();
        modalWrap.querySelector('.modal__btn').addEventListener('click', closeModal);
        modalWrap.querySelector('.modal__card_btn').addEventListener('click', function () {

          copyText('.modal__card_number span');
        });
        break;
      case 'activity':
        changeContent(evt.currentTarget, modalWrap);
        break;
      case 'package':
        changeContent(evt.currentTarget, modalWrap);
        multiplyPrice(modalWrap);
        break;
      default:
        break;
    }

    modalWrap.style.top = overlay.scrollY + 'px';
    setTimeout(function () {
      modalWrap.classList.add('modal--open');
      modalInner.classList.add('modal__content--open');
    }, Timeout.now);

    if (modalForm) {
      forms(modalForm, closeModal, selectorsTrigger.substr(1));

      if (modalForm.querySelectorAll('[name="phone"]').length > 0) {
        document.querySelectorAll('[name="phone"]').forEach(input => {
          let phoneMask = IMask(
            input, {
              mask: '+{7} (000) 000-00-00'
            });
        });
      }
    }

    modalBtnClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModalEsc);
    document.addEventListener('click', closeModalHandler);
  }

  function closeModal() {
    modalWrap = document.querySelector('.modal');
    modalInner = document.querySelector('.modal__content');
    modalWrap.classList.remove('modal--open');
    modalInner.classList.remove('modal__content--open');

    setTimeout(function () {
      body.removeChild(modalWrap);
      overlay.mainFunction();
      document.removeEventListener('keydown', closeModalEsc);
      document.removeEventListener('click', closeModalHandler);
    }, Timeout.quickly);
  }

  if (!isGift) {
    const blocks = document.querySelectorAll(selectorsTrigger);

    for (let i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener('click', function (evt) {
        if (evt.target.hasAttribute('data-modal')) {
          openModal(evt);
        }
      });
    }
  } else {
    const trigger = document.querySelector(selectorsTrigger);

    trigger.addEventListener('click', openModal);
  }


};

export default modal;
