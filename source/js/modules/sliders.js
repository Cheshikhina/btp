import Swiper from 'swiper';

var TABLET_MEDIA = '(max-width: 1024px)';

if (document.querySelector('.main_slider')) {
  const mainSlider = new Swiper('.main_slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 700,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.main_slider__btn--next',
      prevEl: '.main_slider__btn--prev',
    },
    // autoplay: {
    //   delay: 7000,
    // },
  });
}

let tabsSlider;

function sliderInit() {
  tabsSlider = new Swiper('.about_hotel__tabs', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      clickable: true,
    }
  });
}

if (window.matchMedia(TABLET_MEDIA).matches) {
  sliderInit();
}

const resizeHandlerSlider = function () {
  if (!window.matchMedia(TABLET_MEDIA).matches) {
    if (tabsSlider) {
      tabsSlider.destroy();
    }
  } else {
    sliderInit();
  }
};

window.addEventListener('resize', resizeHandlerSlider);
