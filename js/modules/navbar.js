export default function initNavMenu() {
  const hamburger_menu = document.querySelector('.hamburger-menu');
  const bgNavbar = document.querySelector('.bg-navbar');
  const links = document.querySelectorAll('.links ul li a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      bgNavbar.classList.toggle('active');
    });
  });
  hamburger_menu.addEventListener('click', () => {
    bgNavbar.classList.toggle('active');
    console.log(hamburger_menu);
  });
}
