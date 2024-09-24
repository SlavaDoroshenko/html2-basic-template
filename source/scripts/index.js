const toggleButton = document.querySelector('.page-header__toggle');
const siteMenu = document.querySelector('.site-menu');

toggleButton.addEventListener('click', () => {
  siteMenu.classList.toggle('site-menu--visible');
});
