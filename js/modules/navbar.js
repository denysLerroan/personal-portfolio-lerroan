export default function initNavMenu() {
  const hamburger_menu = document.querySelector('.hamburger-menu');
  const bgNavbar = document.querySelector('.bg-navbar');
  const links = document.querySelectorAll('.links ul li a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      bgNavbar.classList.toggle('active');
      if (link.innerHTML === 'About me') {
        setTimeout(() => {
          window.location.pathname = '/about.html';
          console.log(window.location);
        }, 2000);
      }
    });
  });
  hamburger_menu.addEventListener('click', () => {
    bgNavbar.classList.toggle('active');
  });
}
