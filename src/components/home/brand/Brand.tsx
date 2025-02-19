// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import brand1 from "../../../assets/images/brand/1.png";
import brand2 from "../../../assets/images/brand/2.png";
import brand3 from "../../../assets/images/brand/3.png";
import brand4 from "../../../assets/images/brand/4.png";
import brand5 from "../../../assets/images/brand/5.png";
const Brand = () => {
  const brandImages = [brand1, brand2, brand3, brand4, brand5];
  return (
    <div className="bg-[#333333]">
      <div className="py-5 container mx-auto overflow-hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {brandImages.map((brand, index) => (
            <SwiperSlide key={index}>
              <img src={brand} className="w-16 mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
