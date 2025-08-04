import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/all.scss';

// AOS 設定
import AOS from 'aos';
import 'aos/dist/aos.css';

window.onload = () => {
  AOS.init();
};

// Swiper 設定
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
