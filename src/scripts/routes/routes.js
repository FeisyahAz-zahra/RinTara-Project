import ExplorePage from '../views/pages/explore-page';
import HomePage from '../views/pages/home-page';
import AboutUs from '../views/pages/aboutUs-page';
import ArticlePage from '../views/pages/article-page';
import ProvinceDetail from '../views/pages/provinceDetail-page';

const routes = {
  '/': HomePage,
  '/explore': ExplorePage,
  '/about-us': AboutUs,
  '/province-detail/:id': ProvinceDetail,
  '/article/:id': ArticlePage,
};

export default routes;
