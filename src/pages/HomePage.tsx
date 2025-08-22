import Banner from "../components/home/banner/Banner";
import Brand from "../components/home/brand/Brand";

import Categories from "../components/home/categories/Categories";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <PhotoGallery />
      <Brand />
    </div>
  );
};

export default HomePage;
