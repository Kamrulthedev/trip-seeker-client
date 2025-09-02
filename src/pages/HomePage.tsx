import Banner from "../components/home/banner/Banner";
import Agensys from "../components/home/agensys/Agensys";
import Categories from "../components/home/categories/Categories";
import Explore from "../components/home/explore/Explore";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";
import { TripsAndPackage } from "../components/home/homeServices/TripsAndPackage";
import Winners from "../components/home/winners/Winners";
import Plan from "../components/home/plan/Plan";

const HomePage = () => {
  return (
    <div className="bg-slate-50">
      <Banner />
      <Categories />
      <Agensys></Agensys>
      <Explore></Explore>
      <TripsAndPackage></TripsAndPackage>
      <Winners></Winners>
      <Plan></Plan>
      <PhotoGallery />
    </div>
  );
};

export default HomePage;
