const changeContent = (wrapCard, wrapModal) => {
  const data = {
    activity: {
      'activity__title': 'modal__title'
    },
    package: {
      'package__images>*:not(.package__mark)': 'modal__images',
      'package__title': 'modal__title',
      'package__text_icon--guest': 'modal__text--guest',
      'package__price>span:not(.price__last)': 'modal__price>span:not(.price__last)',
      'price__last': 'price__last'
    }
  };

  function replaceData(obj) {
    for (let key in obj) {
      wrapModal.querySelector('.' + obj[key]).innerHTML = wrapCard.querySelector('.' + key).innerHTML;
    }
  }

  if (wrapCard.classList.contains('activity')) {
    replaceData(data.activity);
  } else if (wrapCard.classList.contains('package')) {
    replaceData(data.package);
  }
};

export default changeContent;
