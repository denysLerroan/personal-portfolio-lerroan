export default function initNavMenu() {
  const hamburger_menu = document.querySelector('.hamburger-menu');
  const container = document.querySelector('.container');
  const links = document.querySelectorAll('.links ul li a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      container.classList.toggle('active');
    });
  });
  hamburger_menu.addEventListener('click', () => {
    container.classList.toggle('active');
  });
}
