import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// import image
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import ig1 from "../../../assets/images/gallery/ig1.jpg";
import ig10 from "../../../assets/images/gallery/ig10.jpg";
import ig3 from "../../../assets/images/gallery/ig3.jpg";
import ig4 from "../../../assets/images/gallery/ig4.jpg";
import ig5 from "../../../assets/images/gallery/ig5.jpg";
import ig6 from "../../../assets/images/gallery/ig6.jpg";
import ig8 from "../../../assets/images/gallery/ig8.jpg";
import ig9 from "../../../assets/images/gallery/ig9.jpg";
import SectionHead from "../../../utils/SectionHead";

const PhotoGallery = () => {
  const photos = [
    { src: ig1, className: "col-span-12 sm:col-span-6 md:col-span-2" },
    { src: ig4, className: "col-span-12 sm:col-span-6 md:col-span-2" },
    { src: ig3, className: "col-span-12 sm:col-span-6 md:col-span-2" },
    { src: ig8, className: "col-span-12 sm:col-span-6 md:col-span-2" },
    { src: ig6, className: "col-span-12 sm:col-span-6 md:col-span-4" },
    { src: ig10, className: "col-span-12 sm:col-span-6 md:col-span-4" },
    { src: ig8, className: "col-span-12 sm:col-span-6 md:col-span-2" },
    { src: ig9, className: "col-span-12 sm:col-span-6 md:col-span-4" },
    { src: ig5, className: "col-span-12 sm:col-span-6 md:col-span-2" },
    { src: ig8, className: "col-span-12 sm:col-span-6 md:col-span-4" },
    { src: ig9, className: "col-span-12 sm:col-span-6 md:col-span-4" },
    { src: ig4, className: "col-span-12 sm:col-span-6 md:col-span-4" },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <SectionHead title="Healthy Individuals Gallery" />

      <PhotoProvider>
        <div className="grid grid-cols-12 gap-3 p-4">
          {photos.map((photo, index) => (
            <PhotoView key={index} src={photo.src}>
              <div
                data-aos="zoom-in"
                className={`relative overflow-hidden group ${photo.className}`}
              >
                <img
                  alt={`img${index + 1}`}
                  src={photo.src}
                  className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <HiOutlineMagnifyingGlass className="text-5xl cursor-pointer text-white" />
                </div>
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default PhotoGallery;
