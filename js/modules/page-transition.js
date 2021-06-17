export default function initPageTransition() {
  function pageTransition() {
    var tl = gsap.timeline();

    tl.to('ul.transition li', {
      duration: 0.1,
      scaleY: 1,
      transformOrigin: 'bottom left',
      stagger: 0.15,
    });
    tl.to('ul.transition li', {
      duration: 0.1,
      scaleY: 0,
      transformOrigin: 'bottom left',
      stagger: 0.08,
      delay: 0.8,
    });
  }

  function contentAnimation() {
    var tl = gsap.timeline();
    tl.from('.js-content-animation', {
      duration: 1.2,
      translateY: 50,
      opacity: 0,
    });
    initScroll();
    initReadMore();
  }

  function initScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowHeight = window.innerHeight * 0.7;

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

  function initReadMore() {
    let more = document.querySelector('.more');
    if (more) {
      more.addEventListener('click', () => {
        more.parentNode.classList.toggle('active-read');
      });
    }
  }

  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransition();
          await delay(1500);
          done();
        },
        async enter(data) {
          contentAnimation();
        },
        async once(data) {
          contentAnimation();
        },
      },
    ],
  });
}
