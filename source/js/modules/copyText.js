const copyText = (selectorText) => {
  const text = document.querySelector(selectorText);
  let range, selection;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('Ошибка копирования номера карты');
  }
};

export default copyText;
