import { historyArticleTemplate } from '../views/template/template-creator';

function searchArticle(judulArtikel, articles) {
  const hasilPencarian = [];

  for (const article of articles) {
    if (article.title.toLowerCase().includes(judulArtikel.toLowerCase())) {
      hasilPencarian.push(article);
    }
  }

  return hasilPencarian.length > 0 ? hasilPencarian : null;
}

function makeSearchArticle(articles) {
  const judulArtikelInput = document.getElementById('inputArticle').value.trim();
  const searchList = document.querySelector('.article-list');
  const searchResult = document.querySelector('.search-result');

  searchList.innerHTML = '';
  searchResult.innerHTML = '';

  if (judulArtikelInput === '') {
    articles.forEach((article) => {
      const articleElement = historyArticleTemplate(article);
      searchList.innerHTML += articleElement;
    });
    return;
  }

  const hasilPencarian = searchArticle(judulArtikelInput, articles);

  if (hasilPencarian !== null) {
    const ArtikelFound = document.createElement('p');
    ArtikelFound.innerHTML = `Hasil pencarian untuk <b>${judulArtikelInput}</b>`;
    searchResult.append(ArtikelFound);
    for (const article of hasilPencarian) {
      const articleElement = historyArticleTemplate(article);
      searchList.innerHTML += articleElement;
    }
  } else {
    const noArtikelFound = document.createElement('p');
    noArtikelFound.innerText = 'Artikel tidak ditemukan';
    searchResult.append(noArtikelFound);
  }
}

export { makeSearchArticle };
