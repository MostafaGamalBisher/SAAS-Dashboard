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
const navLabel = document.querySelectorAll('.nav-bar__label');
const navBadge = document.querySelector('.nav-bar__badge');
const illustration = document.querySelector('.illustration');
const avatar = document.querySelector('.aside__bottom');
const avatarTitle = document.querySelector('.avatar__title');

asideToggle.addEventListener('click', () => {
  aside.classList.toggle('collapsed');
  logo.classList.toggle('logo-modifier');
  navLabel.forEach((el) => el.classList.toggle('label-modifier'));
  navBadge?.classList.toggle('label-modifier');
  illustration.classList.toggle('label-modifier');
  avatar.classList.toggle('aside-bottom__modifier');
  avatarTitle.classList.toggle('label-modifier');
});
