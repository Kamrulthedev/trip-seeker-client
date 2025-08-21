import { Link } from "react-router-dom";
import video1 from "../../../assets/videos/banner1.mp4";
import video2 from "../../../assets/videos/banner2.mp4";
import video3 from "../../../assets/videos/banner3.mp4";
import { setCategory } from "../../../redux/features/filterProducts/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { BtnPrimary } from "../../ui/BtnPrimary";

export const BannerItem1 = () => {
  return (
    <div className="relative w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <video
        src={video1}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex justify-start items-center">
        <div className="container mx-auto text-white px-4 sm:px-6 md:px-12 lg:px-20">
          <p className="uppercase text-sm sm:text-lg tracking-widest font-semibold">
            Need-IT-Now
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-2">
            GYM Collection
          </h1>
          <p className="text-sm sm:text-lg mb-6">Limit Offer 10% off</p>
          <Link to="/products">
            <BtnPrimary text="Stat Shop" title="Shop Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const BannerItem2 = () => {
  return (
    <div className="relative w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <video
        src={video2}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 text-white">
          <p className="uppercase text-sm sm:text-lg tracking-widest font-semibold">
            Need-IT-Now
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-2">
            Clothing Collection
          </h1>
          <p className="text-sm sm:text-lg mb-6">Limit Offer 10% off</p>
          <div className="flex justify-center">
            <Link to="/products">
              <BtnPrimary text="Stat Shop" title="Shop Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BannerItem3 = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-screen h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      <video
        src={video3}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex justify-end items-center text-center lg:text-right">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 text-white">
          <p className="uppercase text-sm sm:text-lg tracking-widest font-semibold">
            Need-IT-Now
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-2">
            Fitness Collection
          </h1>
          <p className="text-sm sm:text-lg mb-6">Limit Offer 40% off</p>
          <div className="flex justify-center lg:justify-end">
            <Link
              to={`/products?category=Fitness`}
              onClick={() => dispatch(setCategory("Fitness"))}
            >
              <BtnPrimary text="Stat Shop" title="Shop Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
