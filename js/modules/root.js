import home from '../views/home.js';
import about from '../views/about-me.js';
import work from '../views/work.js';
import services from '../views/services.js';

export default function initRoot() {
  const main = document.querySelector('#root');
  const content = document.querySelector('.content-page');

  function showContent() {
    setTimeout(() => {
      content.classList.add('show');
    }, 3000);
  }

  const init = () => {
    window.addEventListener('hashchange', () => {
      main.innerHTML = ' ';
      switch (window.location.hash) {
        case ' ':
          main.appendChild(home());
          break;
        case '#services':
          main.appendChild(services());
          break;
        case '#work':
          main.appendChild(work());
          break;
        case '#about':
          main.appendChild(about());
          break;
        default:
          main.appendChild(home());
      }
    });
  };

  window.addEventListener('load', () => {
    main.appendChild(home());
    showContent();
    init();
  });
}
