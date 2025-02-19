// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import { IProduct } from "../../../types/product.type";
import SectionHead from "../../../utils/SectionHead";
import ProductCard from "../../card/ProductCard";
import { ProductCardLoader } from "../../ui/loader/ProductCardLoader";

export default function RelatedProduct() {
  const { data: products, isLoading } = useGetProductsQuery({});
  return (
    <div className="container mx-auto px-5 py-10">
      <SectionHead title="Related products" />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
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
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {isLoading ? (
          <ProductCardLoader />
        ) : (
          products?.data?.map((product: IProduct) => (
            <SwiperSlide key={product._id}>
              <ProductCard productDetails={product} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
