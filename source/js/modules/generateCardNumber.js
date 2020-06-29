const generateCardNumber = () => {
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let cardNumber = [];
  let CardNumberLength = 16;
  for (let i = 0; i < CardNumberLength; i++) {
    if (i % 4 === 0 && i !== 0) {
      cardNumber.push('-');
    }
    cardNumber.push(getRandomInRange(0, 9));
  }
  return cardNumber.join('');
};

export default generateCardNumber;
