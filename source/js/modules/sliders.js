import Swiper from 'swiper';

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
    autoplay: {
      delay: 7000,
    },
  });
}
