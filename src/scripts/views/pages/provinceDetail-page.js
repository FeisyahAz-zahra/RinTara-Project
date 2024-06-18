import { provinceDetailTemplate, historyArticleTemplate } from '../template/template-creator';
import UrlParser from '../../routes/url-parser';
import data from '../../data/DATA.json';
import dataArticles from '../../data/artikel.json';
import { makeSearchArticle } from '../../utils/searchArticleHandler';

const ProvinceDetail = {
  async render() {
    return `
      <div class="province-detail"></div>
       <section class="history">
        <h2>Sejarah Terkait</h2>
        <div class="province-search-bar">
          <input type="text" id="inputArticle" placeholder="Search" />
          <button id="search-btn">Search</button>
        </div>
        <div class="article-container">
          <div class="search-result"></div>
          <div class="article-list"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const header = document.querySelector('.app-header');
    const container = document.querySelector('.province-detail');
    const articleContainer = document.querySelector('.article-list');

    window.scrollTo(0, 0);

    // Ambil id provinsi dari URL
    const provinceId = url.id;
    const provinceData = data.provinces.find((province) => province.id.toString() === provinceId);
    const articlesData = dataArticles.articles.filter((article) => article.idKategori.toString() === provinceId);

    if (!provinceData) {
      container.innerHTML = '<p>Provinsi Tidak Ditemukan!</p>';
      return;
    }

    container.innerHTML = provinceDetailTemplate(provinceData);
    if (articlesData.length > 0) {
      articleContainer.innerHTML = articlesData.map(historyArticleTemplate).join('');
    } else {
      articleContainer.innerHTML = '<p class="notFoundArticle">Artikel tidak tersedia untuk provinsi ini.</p>';
    }

    // Function to check the scroll position and add/remove the "scrolled" class
    const checkScrollPosition = () => {
      const provinceHeaderContent = document.querySelector('.header-content');
      if (provinceHeaderContent) {
        const elementBottom = provinceHeaderContent.getBoundingClientRect().bottom + window.scrollY;
        if (window.scrollY >= elementBottom) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    document.getElementById('search-btn').addEventListener('click', () => makeSearchArticle(articlesData));
    document.getElementById('inputArticle').addEventListener('input', () => makeSearchArticle(articlesData));
    document.getElementById('inputArticle').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        makeSearchArticle(articlesData);
      }
    });

    // Initial check in case the page is already scrolled
    checkScrollPosition();

    // Add the scroll event listener
    window.addEventListener('scroll', checkScrollPosition);
  },
};

export default ProvinceDetail;
