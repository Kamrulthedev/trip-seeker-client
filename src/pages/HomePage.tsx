import Banner from "../components/home/banner/Banner";
import Brand from "../components/home/brand/Brand";
import Categories from "../components/home/categories/Categories";
import Explore from "../components/home/explore/Explore";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";

const HomePage = () => {
  return (
    <div className="bg-slate-50">
      <Banner />
      <Categories />
      <Explore></Explore>
      <PhotoGallery />
      <Brand />
    </div>
  );
};

export default HomePage;
