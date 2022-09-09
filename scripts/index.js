const navToggle = document.querySelector('.nav--mobile--open');
const pageNav = document.querySelector('#page-nav');

/* const navTglOpen = document.querySelector('.nav--mobile--open');
const navTglClose = document.querySelector('.nav--mobile--close'); */

navToggle.addEventListener('click', () => {

  pageNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);

  pageNav.toggleAttribute('data-visible');
  /* navTglOpen.toggleAttribute('data-visible');
  navTglClose.toggleAttribute('data-visible'); */

})