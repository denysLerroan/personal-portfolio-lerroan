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
    tl.from('.inner', {
      duration: 1.2,
      translateY: 50,
      opacity: 0,
    });
    // tl.to('img', { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' });
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
