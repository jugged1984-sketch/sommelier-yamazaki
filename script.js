const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

// 公開先が決まり次第、値だけを差し替えてください（例: 'mailto:name@example.com'）。
const contactLinks = {
  inquiry: '',
  instagram: '',
};

document.querySelectorAll('[data-contact-link]').forEach((link) => {
  const url = contactLinks[link.dataset.contactLink];
  if (!url) return;
  link.href = url;
  link.classList.remove('is-pending');
  link.removeAttribute('aria-disabled');
  if (/^https?:/.test(url)) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});

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
