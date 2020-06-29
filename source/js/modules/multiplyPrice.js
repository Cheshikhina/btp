const multiplyPrice = (wrapEl) => {
  const regex = /[^0-9]/;
  const multiplier = wrapEl.querySelector('#number_room'),
    priceNode = wrapEl.querySelector('.price>span:not(.price__last)'),
    price = parseInt((wrapEl.querySelector('.price>span:not(.price__last)').textContent).replace(',', '')),
    priceLastNode = wrapEl.querySelector('.price__last'),
    priceLast = parseInt((wrapEl.querySelector('.price__last').textContent).replace(',', ''));

  function addComma(num) {
    return num.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ',');
  }

  multiplier.addEventListener('input', function (evt) {
    let number = [];
    evt.target.value = evt.target.value.replace(regex, '');
    evt.target.value > 20 ? evt.target.value = number.pop() || '1' : number.push(evt.target.value);
    priceNode.innerHTML = addComma(price * evt.target.value);
    priceLastNode.innerHTML = addComma(priceLast * evt.target.value);
  });
};

export default multiplyPrice;
