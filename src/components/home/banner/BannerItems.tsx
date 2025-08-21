import { Link } from "react-router-dom";
import video1 from "../../../assets/videos/banner5.mp4";
import video2 from "../../../assets/videos/banner1.mp4";
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-2">
            Explore Cox’s Bazar & Chittagong Like Never Before
          </h1>
          <p className="text-sm sm:text-lg mb-6">
            Discover the best experiences in Bangladesh
          </p>
          <Link to="/services">
            <BtnPrimary text="Our Services" title="Our Services" />
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-2">
            Bangladesh – Your Travel Partner to the Sea & Hills
          </h1>
          <p className="text-sm sm:text-lg mb-6">
            Experience nature, culture, and adventure
          </p>
          <div className="flex justify-center">
            <Link to="/services">
              <BtnPrimary text="Our Services" title="Our Services" />
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
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 mb-2">
            Explore Beaches, Hills & Culture of Bangladesh
          </h1>
          <p className="text-sm sm:text-lg mb-6">
            Your adventure starts here
          </p>
          <div className="flex justify-center lg:justify-end">
            <Link
              to="/services"
              onClick={() => dispatch(setCategory("Travel"))}
            >
              <BtnPrimary text="Our Services" title="Our Services" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
