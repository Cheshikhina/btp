const colorTheme = () => {
  const toggle = document.querySelector('#color_theme'),
    html = document.querySelector('html');

  function changeColor() {
    return toggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
  }

  toggle.addEventListener('change', changeColor);
};

export default colorTheme;
