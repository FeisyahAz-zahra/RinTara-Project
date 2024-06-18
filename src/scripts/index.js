import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/provinceDetail.css';
import '../styles/home-page.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero-element';
import './components/footer';

import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
