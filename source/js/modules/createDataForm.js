const createDataForm = (isPackageForm = false) => {
  const data = {};
  data.title = document.querySelector('.modal__title').textContent;
  if (isPackageForm) {
    data.guest = document.querySelector('.modal__text--guest>span').textContent;
    data.room = document.querySelector('#number_room').value;
    data.price = document.querySelector('.modal__price>span:not(.price__last)').textContent;
  }
  return data;
};

export default createDataForm;
