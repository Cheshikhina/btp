import 'svgxuse';
import 'lazysizes';
import './modules/sliders';
import './forIE/polyfills';
import common from './modules/common';
import scroll from './modules/scroll';
import menu from './modules/menu';
import colorTheme from './modules/colorTheme';
import rating from './modules/rating';
import tab from './modules/tab';

window.addEventListener('DOMContentLoaded', () => {
  common();
  scroll();
  menu(['.user__toggle', '.header__nav_btn']);
  // modal('[data-modal="open_popup"]', '#popup');
  // modal('.trigger', '#popup');
  // modal('.page_slider');
  colorTheme();
  rating();
  tab('about_hotel');
  document.querySelector('.search__toggle').addEventListener('click', function () {
    document.querySelector('.search__toggle').parentNode.parentNode.classList.add('search--open');
  });
});
