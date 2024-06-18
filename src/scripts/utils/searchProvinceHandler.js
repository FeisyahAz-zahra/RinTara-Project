import data from '../data/DATA.json';
import { kategoriTemplate } from '../views/template/template-creator';

function searchProvince(judulProvince) {
  const hasilPencarian = [];

  for (const province of data.provinces) {
    if (province.title.toLowerCase().includes(judulProvince.toLowerCase())) {
      hasilPencarian.push(province);
    }
  }

  return hasilPencarian.length > 0 ? hasilPencarian : null;
}

function makeSearch() {
  const judulProvinceInput = document.getElementById('inputProvince').value.trim();
  const searchList = document.querySelector('.kategori');
  const searchResult = document.querySelector('.search-result');

  searchList.innerHTML = '';
  searchResult.innerHTML = '';

  if (judulProvinceInput === '') {
    data.provinces.forEach((province) => {
      const provinceElement = kategoriTemplate(province);
      searchList.innerHTML += provinceElement;
    });
    return;
  }

  const hasilPencarian = searchProvince(judulProvinceInput);

  if (hasilPencarian !== null) {
    const provinceFound = document.createElement('p');
    provinceFound.innerHTML = `Hasil pencarian untuk <b>${judulProvinceInput}</b>`;
    searchResult.append(provinceFound);
    for (const provinceItem of hasilPencarian) {
      const provinceElement = kategoriTemplate(provinceItem);
      searchList.innerHTML += provinceElement;
    }
  } else {
    const noProvinceFound = document.createElement('p');
    noProvinceFound.innerText = 'Provinsi tidak ditemukan';
    searchResult.append(noProvinceFound);
  }
}

export { makeSearch };
