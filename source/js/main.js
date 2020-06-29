import 'lazysizes';
import './forEdge/polyfills';
import './modules/sliders';
import common from './modules/common';
import scroll from './modules/scroll';
import menu from './modules/menu';
import colorTheme from './modules/colorTheme';
import rating from './modules/rating';
import tab from './modules/tab';
import card from './modules/card';
import search from './modules/search';
import map from './modules/map';
import forms from './modules/forms';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  common.functions();
  scroll();
  menu(['.user__toggle', '.header__nav_btn']);
  colorTheme();
  rating();
  tab('about_hotel');
  card('.package');
  search();
  map();
  forms();
  modal('.gift', true);
  modal('.activity');
  modal('.package');
  // modal('[data-modal="open_popup"]', '#popup');
  // modal('.trigger', '#popup');
  // modal('.page_slider');



});
