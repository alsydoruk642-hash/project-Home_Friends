import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutUsSection = document.querySelector('.about-us');

const aboutUsSwiper = new Swiper(
  aboutUsSection.querySelector('.about-us-swiper'),
  {
    modules: [Navigation, Pagination],

    navigation: {
      nextEl: aboutUsSection.querySelector('.about-us-button-next'),
      prevEl: aboutUsSection.querySelector('.about-us-button-prev'),
    },

    pagination: {
      el: aboutUsSection.querySelector('.about-us-swiper-pagination'),
      clickable: true,
      dynamicBullets: window.innerWidth < 768,
    },
  }
);

window.addEventListener('resize', () => {
  aboutUsSwiper.update();
  aboutUsSwiper.params.pagination.dynamicBullets = window.innerWidth < 768;

  aboutUsSwiper.pagination.destroy();
  aboutUsSwiper.pagination.init();
  aboutUsSwiper.pagination.render();
  aboutUsSwiper.pagination.update();
});
