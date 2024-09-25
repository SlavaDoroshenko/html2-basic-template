const toggleButton = document.querySelector('.page-header__toggle');
const siteMenu = document.querySelector('.site-menu');

toggleButton.addEventListener('click', () => {
  siteMenu.classList.toggle('site-menu--visible');
  toggleButton.classList.toggle('page-header__toggle--open');
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
