// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import your newly animated banner items
import { BannerItem1, BannerItem2, BannerItem3 } from "./BannerItems";

// This component now holds the Swiper configuration
export default function Banner() {
  return (
    <>
      {/* You can add these styles to your global CSS file instead */}
    <style>
        {`
          .mySwiper .swiper-pagination-bullet { background-color: #ffffff; width: 10px; height: 10px; opacity: 0.7; transition: all 0.3s ease; }
          .mySwiper .swiper-pagination-bullet-active { background-color: #22c55e; width: 25px; border-radius: 5px; opacity: 1; }
          .mySwiper .swiper-button-next, .mySwiper .swiper-button-prev { color: #ffffff; background-color: rgba(0, 0, 0, 0.3); border-radius: 50%; width: 28px; height: 28px; transition: background-color 0.3s ease; }
          .mySwiper .swiper-button-next:hover, .mySwiper .swiper-button-prev:hover { background-color: rgba(0, 0, 0, 0.5); }
          .mySwiper .swiper-button-next::after, .mySwiper .swiper-button-prev::after { font-size: 1.25rem; font-weight: bold; }
        `}
      </style>
      <Swiper
        spaceBetween={30}
        effect={"fade"} 
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => (isActive ? <BannerItem1 /> : null)}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (isActive ? <BannerItem2 /> : null)}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (isActive ? <BannerItem3 /> : null)}
        </SwiperSlide>
      </Swiper>
    </>
  );
}