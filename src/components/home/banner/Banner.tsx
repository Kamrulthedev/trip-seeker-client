// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { BannerItem1, BannerItem2, BannerItem3 } from "./BannerItems";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerItem1 />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem2 />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem3 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
