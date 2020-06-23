const rating = () => {
  const blockRating = document.querySelectorAll('[data-rating]');

  function removeChild(el) {
    el.clildren.forEach(clild => {
      clild.remove();
    });
  }

  function createChild(el) {
    let numberStars = el.dataset.rating;
    if (numberStars != 0) {
      for (let i = 0; i < numberStars; i++) {
        let span = document.createElement('span');
        el.appendChild(span);
      }
    }
  }


  blockRating.forEach(block => {
    if (block.hasChildNodes()) {
      removeChild(block);
    }
    createChild(block);
    block.setAttribute('aria-label', `hotel rating - ${block.dataset.rating}`);
  });
};

export default rating;
