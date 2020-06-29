import createDataForm from './createDataForm';

const forms = (modalForm = false, closeModal = false, typeForm = false) => {
  const form = document.querySelectorAll('[data-form] form');
  const inputs = document.querySelectorAll('[data-form] [required]');
  const URL = 'http://httpbin.org/post';
  let dataModalForm;

  function createTextPlaceholder(input) {
    const regexpName = /^[A-Za-zА-Яа-яЁё]{2}[A-Za-zА-Яа-яЁё\s]*/g,
      regexpPhone = /\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/g,
      regexpMail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g;
    let message = false;

    if (!input.value.length || !input.value) {
      message = 'This entry is required';
    } else {
      switch (input.name) {
        case 'name':
          if (input.value.trim() === '') {
            message = 'Enter your name without spaces before';
          } else if (!input.value.match(regexpName)) {
            message = 'This entry must be at least 2 characters';
          }
          break;
        case 'phone':
          if (!input.value.match(regexpPhone)) {
            message = 'Enter the correct phone number';
          }
          break;
        case 'email':
          if (!input.value.match(regexpMail)) {
            message = 'Enter the correct email';
          }
          break;
        default:
          message = false;
      }
    }
    return message;
  }

  function removeFormMessage(node) {
    let span = node.parentNode.parentNode.querySelector('.message');
    span.classList.add('delete');
    setTimeout(function () {
      span.remove();
    }, 300);
  }

  function createSpan(node, message, isFormSpend = false) {
    if (isFormSpend && node.parentNode.querySelector('span.message') || !isFormSpend && node.parentNode.querySelector('span')) {
      return;
    }
    let span = document.createElement('span');
    span.textContent = message;

    node.parentNode.appendChild(span);


    if (isFormSpend) {
      span.classList.add('message');

      setTimeout(function () {
        removeFormMessage(node);
      }, 1500);

      if (isFormSpend === 'error') {
        span.classList.add('error');
      } else {
        node.reset();
        if (closeModal) {
          setTimeout(function () {
            closeModal();
          }, 1600);
        }
      }
    }
  }

  function removePlaceholder(evt) {
    if (evt.target.parentNode.querySelector('span')) {
      evt.target.parentNode.querySelector('span').style.opacity = '0';
      setTimeout(function () {
        if (evt.target.parentNode.querySelector('span')) {
          evt.target.parentNode.querySelector('span').remove();
        }
      }, 300);
    }
  }

  function checkForm(formCuttent) {
    let inputsCuttent = formCuttent.querySelectorAll('input:not(#number_room)');
    let flag = false;
    inputsCuttent.forEach(input => {
      if (createTextPlaceholder(input)) {
        createSpan(input, createTextPlaceholder(input));
        flag = true;
      }
    });
    return flag;
  }

  function submitForm(evt) {
    evt.preventDefault();
    if (checkForm(evt.target)) {
      return;
    }

    const data = new FormData(evt.target);

    if (modalForm) {
      switch (typeForm) {
        case 'activity':
          dataModalForm = createDataForm();
          break;
        case 'package':
          dataModalForm = createDataForm(true);
          break;
        default:
          break;
      }

      for (let key in dataModalForm) {
        data.append(key, dataModalForm[key]);
      }
    }


    var xhr = new XMLHttpRequest();
    xhr.onloadstart = function (event) {
      xhr.responseType = "json";
    }
    xhr.open('POST', URL);
    xhr.send(data);

    xhr.addEventListener('load', function (e) {
      var target = e.target;

      try {
        if (target.status === 200) {
          evt.target.reset();
          createSpan(evt.target, 'Data sent successfully', true);
        } else if (target.response.message) {
          createSpan(evt.target, target.response.message, 'error');
        } else {
          createSpan(evt.target, 'Internal server error', 'error');
        }

      } catch (err) {
        createSpan(evt.target, err, 'error');
      }
    });

    xhr.addEventListener('error', function () {
      createSpan(evt.target, 'Connection error', 'error');
    });
  }

  form.forEach(item => {
    item.addEventListener('submit', submitForm);
  });

  inputs.forEach(input => {
    input.removeAttribute('required');
    if (input.name === 'email') {
      input.setAttribute('type', 'text');
    }
    input.addEventListener('input', removePlaceholder);
  });

  if (modalForm) {
    const inputsModal = modalForm.querySelectorAll('[required]');
    modalForm.addEventListener('submit', submitForm);
    inputsModal.forEach(input => {
      input.removeAttribute('required');
      if (input.name === 'email') {
        input.setAttribute('type', 'text');
      }
      input.addEventListener('input', removePlaceholder);
    });
  }
};

export default forms;
