import initNavMenu from './modules/navbar.js';
import initPageTransition from './modules/page-transition.js';

window.onload = () => {
  initPageTransition();
  initNavMenu();
};
