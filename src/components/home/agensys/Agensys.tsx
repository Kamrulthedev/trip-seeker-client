// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import agensy1 from "../../../assets/images/Agensys/1.png";
import agensy2 from "../../../assets/images/Agensys/2.png";
import agensy3 from "../../../assets/images/Agensys/3.jpg";
import agensy4 from "../../../assets/images/Agensys/4.jpg";
import agensy5 from "../../../assets/images/Agensys/5.jpg";

const Agensys = () => {
  const brandImages = [agensy1, agensy2, agensy3, agensy4, agensy5];
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

export default Agensys;
