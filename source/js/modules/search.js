const search = () => {
  const searchBtn = document.querySelector('.search__toggle'),
    searchBlock = document.querySelector('.search');

  function searchCloseHandler(evt) {
    if (searchBlock.classList.contains('search--open') && evt.target.tagName !== 'INPUT' && evt.target !== searchBtn) {
      evt.preventDefault();
      searchBlock.classList.remove('search--open');
    }
  }

  searchBtn.addEventListener('click', function () {
    searchBlock.classList.add('search--open');
  });

  document.addEventListener('click', searchCloseHandler);
};

export default search;
