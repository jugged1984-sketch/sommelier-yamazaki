const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'メニューを開く' : 'メニューを閉じる';
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));

document.querySelector('[data-year]').textContent = new Date().getFullYear();
