const recentItemTemplate = (data) => `
              <a href="#/article/${data.id}" class="recent-item">
                    <div class="recent-item-img">
                        <img src="${data.img}" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>${data.title}</h3>
                        <p>${data.body}</p>
                    </div>
                </a>`;

const exploreItemTemplate = (data) => `
        <a href="#/province-detail/${data.id}" class="explore-items">
                    <div class="explore-item-img">
                        <img src="${data.image}" alt="">
                    </div>
                    <p>${data.title}</p>
                </a> `;

const kategoriTemplate = (data) => `
        <a href="#/province-detail/${data.id}" class="kategori-items">
            <div class="kategori-img">
                <img src="${data.image}" alt="">
            </div>
            <p>${data.title}</p>
        </a>
    `;

const provinceDetailTemplate = (data) => `
    <div class="header-content">
      <img src="${data.image}" alt="${data.title}">
      <div class="overlay-text">
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </div>
    </div>
  
    <div class="province-main-content">
      <section class="tentang">
        <h2>Tentang</h2>
        <p>Ibu Kota : ${data.ibuKota}</p>
        <p>Luas : ${data.luas}</p>
        <p>Bahasa : ${data.bahasa}</p>
        <p>Situs Sejarah : ${data.situs}</p>
        <p>Tokoh Sejarah : ${data.tokoh}</p>
      </section>
  
        <section class="culture">
        <h2>Budaya</h2>
        <div class="culture-card-list">
          ${data.budaya.map((item) => `
            <div class="culture-card">
              <img src="${item.url}" alt="Cultural Image" />
              <div class="culture-info">
                <h3>${item.title}</h3>
               
              </div>
            </div>
          `).join('')}
        </div>
      </section>
  
    </div>
  `;

const historyArticleTemplate = (data) => `
  <div class="article-item">
            <a href="#/article/${data.id}">
              <h3>${data.title}</h3>
            </a>
            <p class="release-date">Release date: xx-xx-xxxx</p>
            <h4>${data.body}</h4>
          </div>
          `;

const articleContentTemplate = (data) => `
  <div class="article-content">
      <h1>${data.title}</h1>
      <img
        src="${data.img}"
        alt="${data.title}"
        class="featured-image"
      />
      <p>${data.body}</p>
    </div>`;

export {
  recentItemTemplate,
  exploreItemTemplate,
  kategoriTemplate,
  provinceDetailTemplate,
  articleContentTemplate,
  historyArticleTemplate,
};
