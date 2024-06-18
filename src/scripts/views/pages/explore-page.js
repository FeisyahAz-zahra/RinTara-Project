import { kategoriTemplate } from '../template/template-creator';
import data from '../../data/DATA.json';
import {makeSearch} from '../../utils/searchProvinceHandler';

const ExplorePage = {
  async render() {
    return `
        <div class="explore-page">
        <h2 class="explore-title">Explore</h2>

        <div class="search-section">
            <div class="search-bar">
                <input type="text" id="inputProvince" placeholder="Search">
            </div>
            <div class="search-result"></div>
        </div>

        <div class="kategori"></div>
    </div>
      `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const header = document.querySelector('.app-header');
    header.classList.add('scrolled');

    const container = document.querySelector('.kategori');
    data.provinces.forEach((province) => {
      container.innerHTML += kategoriTemplate(province);
    });

    // Menambahkan event listener untuk navigasi ke halaman detail provinsi
    container.addEventListener('click', async (event) => {
      if (event.target.classList.contains('kategori-items')) {
        event.preventDefault();
        const provinceId = event.target.getAttribute('href').split('/').pop();
        await this.navigateToProvinceDetail(provinceId);
      }
    });

    // document.getElementById("search-btn").addEventListener("click", makeSearch);
    document.getElementById('inputProvince').addEventListener('input', makeSearch);
    document.getElementById('inputProvince').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        makeSearch();
      }
    });
  },

  async navigateToProvinceDetail(provinceId) {
    const url = `#/province-detail/${provinceId}`;
    window.location.hash = url;
  },

};

export default ExplorePage;
