// ============================================================
// MAIN ENTRY POINT
// Import modules here and initialize the application.
// ============================================================
import '../scss/main.scss';

const navBarElements = document.querySelectorAll('.nav-bar__item');

navBarElements.forEach((item) => {
  item.addEventListener('click', (e) => {
    const targetedElement = e.currentTarget;

    navBarElements.forEach((el) =>
      el.classList.remove('nav-bar__item--active')
    );

    targetedElement.classList.add('nav-bar__item--active');
  });
});

const asideToggle = document.querySelector('.aside__toggle');
const aside = document.querySelector('.aside');
const logo = document.querySelector('.logo');

asideToggle.addEventListener('click', () => {
  aside.classList.toggle('collapsed');
  logo.classList.toggle('logo-modifier');
});
