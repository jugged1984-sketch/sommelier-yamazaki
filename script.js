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

const inquiryForm = document.querySelector('[data-inquiry-form]');

inquiryForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!inquiryForm.reportValidity()) return;

  const submitButton = inquiryForm.querySelector('[data-submit-button]');
  const status = inquiryForm.querySelector('[data-form-status]');
  const defaultButtonText = submitButton.innerHTML;

  submitButton.disabled = true;
  submitButton.innerHTML = '<span>SENDING...</span><small>送信しています</small><i aria-hidden="true">→</i>';
  status.className = 'form-status';
  status.textContent = 'お問い合わせを送信しています。';

  try {
    const response = await fetch(inquiryForm.action, {
      method: inquiryForm.method,
      body: new FormData(inquiryForm),
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('Form submission failed');

    inquiryForm.reset();
    status.classList.add('is-success');
    status.textContent = 'お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。';
  } catch (error) {
    status.classList.add('is-error');
    status.textContent = '送信できませんでした。通信環境をご確認のうえ、もう一度お試しください。';
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = defaultButtonText;
  }
});
