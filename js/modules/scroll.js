export default function initScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowHeight = window.innerHeight * 0.75;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHeight;
      if (sectionTop < 0) {
        section.classList.add('ativa-scroll');
      }
    });
  }
  window.addEventListener('scroll', animaScroll);
}
