import UrlParser from '../../routes/url-parser';
import articleData from "../../data/artikel.json";
import { articleContentTemplate } from "../template/template-creator";

const ArticlePage = {
  async render() {
    return `
      <div class="article-page">
      </div>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const header = document.querySelector('.app-header');
    const articleContainer = document.querySelector('.article-page');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const articleId = url.id;
    const article = articleData.articles.find((article) => article.id.toString() === articleId);

    if (window.scrollY === 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.add('scrolled');
    }

    if (article) {
      articleContainer.innerHTML = articleContentTemplate(article);
    } else {
      articleContainer.innerHTML = '<p>Artikel tidak ditemukan.</p>';
    }
  },
};

export default ArticlePage;
