export default function initPageLoader() {
  const content = document.querySelector('.content-page');

  function showContent() {
    setTimeout(() => {
      content.classList.add('show');
    }, 3000);
  }

  window.addEventListener('load', () => {
    showContent();
  });
}
