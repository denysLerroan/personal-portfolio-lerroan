export default function initReadMore() {
  let more = document.querySelector('.more');
  if (more) {
    more.addEventListener('click', () => {
      more.parentNode.classList.toggle('active-read');
    });
  }
}
