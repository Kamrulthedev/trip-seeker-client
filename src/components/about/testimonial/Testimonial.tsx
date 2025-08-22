import SectionHead from "../../../utils/SectionHead";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";


const Testimonial = () => {

  return (
    <div className="container mx-auto  my-20">
      <SectionHead title="Happy Clients" />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
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
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
      >
        {/* {isLoading ? (
          <div className="grid grid-cols-3 gap-x-7">
            {Array.from({ length: 3 }).map((_, index) => (
              <TestimonialLoader key={index} />
            ))}
          </div>
        ) : (
          data?.data.map((item: ITestimonial) => (
            <SwiperSlide key={item._id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))
        )} */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
