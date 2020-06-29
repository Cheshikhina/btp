import IMask from 'imask';

const common = {};
common.DESKTOP_MEDIA = '(min-width: 1025px)';
common.TABLET_MEDIA = '(max-width: 1024px)';
common.MOBILE_MEDIA = '(max-width: 767px)';

common.functions = () => {
  const noFocus = () => {
    document.addEventListener('mouseup', function (evt) {
      if (evt.target.tagName !== 'A' && evt.target.tagName !== 'BUTTON') {
        return;
      }
      evt.target.blur();
    });
  };

  const addClassForLazyload = () => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.classList.add('lazyload');
    });
  };

  const addPhoneMask = () => {
    if (document.querySelectorAll('input[name="input_phone"]').length > 0) {
      document.querySelectorAll('input[name="input_phone"]').forEach(input => {
        let phoneMask = IMask(
          input, {
            mask: '+{7} (000) 000-00-00'
          });
      });
    }
  };


  noFocus();
  addClassForLazyload();
  addPhoneMask();
};

export default common;
