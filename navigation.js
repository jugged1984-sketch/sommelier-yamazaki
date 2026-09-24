// Complements the existing menu only on pages that load this file.
const pageMenu = document.querySelector('.menu-button');
const pageNavigation = document.querySelector('#navigation');
if (pageMenu && pageNavigation) {
  const syncMenuLabel = () => {
    pageMenu.querySelector('.sr-only').textContent =
      pageMenu.getAttribute('aria-expanded') === 'true'
        ? 'メニューを閉じる' : 'メニューを開く';
  };
  pageNavigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) syncMenuLabel();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && pageMenu.getAttribute('aria-expanded') === 'true') {
      pageMenu.click();
      pageMenu.focus();
    }
  });
}
