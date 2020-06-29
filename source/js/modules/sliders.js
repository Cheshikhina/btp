import Swiper from 'swiper';
import common from './common';

if (document.querySelector('.main_slider')) {
  const mainSlider = new Swiper('.main_slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.main_slider__btn--next',
      prevEl: '.main_slider__btn--prev',
    },
    autoplay: {
      delay: 7000,
    },
  });
}

if (document.querySelector('.reviews_slider')) {
  const mainSlider = new Swiper('.reviews_slider__inner', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews_slider__btn--next',
      prevEl: '.reviews_slider__btn--prev',
    },
    a11y: {
      notificationClass: 'visually_hidden'
    }
  });
}

const breakpointTablet = window.matchMedia(common.TABLET_MEDIA);
const breakpointMobile = window.matchMedia(common.MOBILE_MEDIA);
let tabsSlider;
let activitiesSlider;

function tabsSliderInit() {
  tabsSlider = new Swiper('.about_hotel__tabs', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      clickable: true,
    }
  });
}

function activitiesSliderInit() {
  activitiesSlider = new Swiper('.activities__slider', {
    slidesPerView: 1.7,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true,
    }
  });
}

function breakpointTabletChecker() {
  if (breakpointTablet.matches === false) {
    if (tabsSlider !== undefined) {
      tabsSlider.destroy(true, true);
    }
    return;
  } else if (breakpointTablet.matches === true) {
    return tabsSliderInit();
  }
}

function breakpointMobileChecker() {
  if (breakpointMobile.matches === false) {
    if (activitiesSlider !== undefined) {
      activitiesSlider.destroy(true, true);
    }
    return;
  } else if (breakpointMobile.matches === true) {
    return activitiesSliderInit();
  }
}

breakpointTablet.addListener(breakpointTabletChecker);
breakpointMobile.addListener(breakpointMobileChecker);
breakpointTabletChecker();
breakpointMobileChecker();
