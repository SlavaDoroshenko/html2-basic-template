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

document.addEventListener('DOMContentLoaded', () => {
  const logoIcon = L.icon({
    iconUrl: 'images/marker@2x.png', // Ссылка на изображение логотипа
    iconSize: [38, 50], // Размер иконки
    iconAnchor: [25, 25], // Координаты привязки иконки
  });

  // Инициализация карты
  const map = L.map('map', {
    zoomControl: false, // Отключение кнопок + и -
    attributionControl: false, // Отключение надписи справа внизу
  }).setView([55.681052, 37.526124], 12); // Координаты Москвы

  // Добавление слоя карты
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Добавление маркера
  const marker = L.marker([55.681052, 37.526124], { icon: logoIcon }).addTo(
    map
  );
});
