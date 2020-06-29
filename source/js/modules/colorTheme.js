const colorTheme = () => {
  const toggle = document.querySelector('#color_theme'),
    html = document.querySelector('html');

  function activateDarkMode() {
    const rootElement = document.querySelector(':root');
    const darkTheme = {
      '--white': '#ffffff',
      '--black': '#000000',
      '--accent_1': '#F2994A',
      '--text_lightest': '#E0E0E0',
      '--moon': '#0A223D',
      '--moon_hover': '#F0EA7F',
      '--sun': '#EDE437',
      '--icon_mail': '#BDBDBD',
      '--shadow_black': 'rgba(0, 0, 0, 0.25)',
      '--accent_main': '#F2B1BD',
      '--text_black': '#E5E5E5',
      '--text_dark': '#CCCCCC',
      '--text_light': '#D9D9D9',
      '--text_white': '#E1F1FA',
      '--bg_dark_message': 'rgba(52, 80, 112, 0.8)',
      '--bg_dark': '#345070',
      '--bg_light': '#283E57',
      '--bg_white': '#0A223D',
      '--bg_overlay': 'rgba(10, 34, 61, 0.7)',
      '--btn_text_white': '#22354A',
      '--btn_slider_reviews': '#A6A6A6',
      '--btn_hover': '#B3828B',
      '--logo_header': '#F1F2FA',
      '--logo_footer': 'AD1732',
      '--tick': '#B3828B',
      '--error_message': '#E6A8B3',
    };
    for (let key in darkTheme) {
      rootElement.style.setProperty(key, darkTheme[key])
    }

    toggle.checked = true;
    html.classList.add('dark');
  }

  function activateLightMode() {
    const rootElement = document.querySelector(':root');
    const lightTheme = {
      '--white': '#ffffff',
      '--black': '#000000',
      '--accent_1': '#F2994A',
      '--text_lightest': '#E0E0E0',
      '--moon': '#0A223D',
      '--moon_hover': '#F0EA7F',
      '--sun': '#EDE437',
      '--icon_mail': '#BDBDBD',
      '--shadow_black': 'rgba(0, 0, 0, 0.25)',
      '--accent_main': '#EC1F46',
      '--text_black': '#000000',
      '--text_dark': '#333333',
      '--text_light': '#BDBDBD',
      '--text_white': '#ffffff',
      '--bg_dark_message': 'rgba(10, 34, 61, 0.8)',
      '--bg_dark': '#0A223D',
      '--bg_light': '#F5FAFE',
      '--bg_white': '#ffffff',
      '--bg_overlay': 'rgba(255, 255, 255, 0.4)',
      '--btn_text_white': '#ffffff',
      '--btn_slider_reviews': '#828282',
      '--btn_hover': '#AD1732',
      '--logo_header': '#0A223D',
      '--logo_footer': 'EC1F46',
      '--tick': '#333333',
      '--error_message': '#FF4D4D',
    };
    for (let key in lightTheme) {
      rootElement.style.setProperty(key, lightTheme[key]);
    }

    toggle.checked = false;
    html.classList.remove('dark');
  }

  function setColorScheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    const isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => e.matches && activateDarkMode());
    window.matchMedia('(prefers-color-scheme: light)').addListener(e => e.matches && activateLightMode());

    if (isDarkMode) {
      activateDarkMode();
    }
    if (isLightMode) {
      activateLightMode();
    }
    if (isNotSpecified || hasNoSupport) {
      console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.');
      let now = new Date();
      let hour = now.getHours();
      if (hour < 4 || hour >= 16) {
        activateDarkMode();
      }
    }
  }

  function changeColor() {
    if (toggle.checked) {
      html.classList.add('dark');
      activateDarkMode();
    } else {
      html.classList.remove('dark');
      activateLightMode();
    }
  }

  toggle.addEventListener('change', changeColor);
  setColorScheme();
};

export default colorTheme;
