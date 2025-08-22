import Banner from "../components/home/banner/Banner";
import Brand from "../components/home/brand/Brand";

import Categories from "../components/home/categories/Categories";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";
import ReasonsToShop from "../components/home/reasonsToShop/ReasonsToShop";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <ReasonsToShop />
      <PhotoGallery />
      <Brand />
    </div>
  );
};

export default HomePage;
