import Banner from "../components/home/banner/Banner";
import Agensys from "../components/home/agensys/Agensys";
import Categories from "../components/home/categories/Categories";
import Explore from "../components/home/explore/Explore";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";
import HomeServices from "../components/home/homeServices/HomeServices";

const HomePage = () => {
  return (
    <div className="bg-slate-50">
      <Banner />
      <Categories />
      <Agensys></Agensys>
      <Explore></Explore>
      <HomeServices></HomeServices>
      <PhotoGallery />
      <Agensys></Agensys>
    </div>
  );
};

export default HomePage;
