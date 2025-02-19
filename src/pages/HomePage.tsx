import Banner from "../components/home/banner/Banner";
import Brand from "../components/home/brand/Brand";

import Categories from "../components/home/categories/Categories";
import ClothesAndEquipment from "../components/home/clothesAndEquipment/ClothesAndEquipment";
import NewArrivals from "../components/home/newArrivals/NewArrivals";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";
import ReasonsToShop from "../components/home/reasonsToShop/ReasonsToShop";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      {/* <WhyChoose /> */}
      <ClothesAndEquipment />
      <ReasonsToShop />
      <PhotoGallery />
      <NewArrivals />
      <Brand />
    </div>
  );
};

export default HomePage;
