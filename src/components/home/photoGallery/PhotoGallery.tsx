/* eslint-disable @typescript-eslint/no-explicit-any */
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { ImageLoader } from "../../ui/loader/ImageLoader";
import g1 from "../../../assets/images/gallery/g1.jpg";
import g2 from "../../../assets/images/gallery/g2.jpg";
import g3 from "../../../assets/images/gallery/g6.jpg";
import g4 from "../../../assets/images/gallery/g6.jpg";
import g6 from "../../../assets/images/gallery/g4.jpg";
import g7 from "../../../assets/images/gallery/g7.jpg";


const photos = [
  { src: g1, alt: "Cox's Bazar Beach", className: "col-span-12 md:col-span-6 row-span-2" }, 
  { src: g2, alt: "Sajek Valley", className: "col-span-12 md:col-span-6" }, 
  { src: g3, alt: "Bandarban Hills", className: "col-span-12 md:col-span-3" }, 
  { src: g4, alt: "Saint Martin's Island", className: "col-span-12 md:col-span-3" }, 
  { src: g7, alt: "Sundarbans Mangrove Forest", className: "col-span-12 md:col-span-6" },
  { src: g6, alt: "Sundarbans Mangrove Forest", className: "col-span-12 md:col-span-6" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants:any = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

// Main Photo Gallery Component
const PhotoGallery = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl p-3 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl md:text-5xl">
            ভ্রমণের ডায়েরি থেকে কিছু মুহূর্ত
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            আমাদের ক্যামেরায় ধারণ করা বাংলাদেশের অসাধারণ কিছু স্থানের ছবি দেখুন।
          </p>
        </motion.div>

        <PhotoProvider>
          <motion.div
            className="grid lg:grid-cols-12 auto-rows-[250px] gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer ${photo.className}`}
                variants={itemVariants}
              >
                <PhotoView src={photo.src}>
                  <>
                    <ImageLoader src={photo.src} alt={photo.alt} className="rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all duration-300 group-hover:bg-opacity-50 group-hover:opacity-100">
                      <Search className="text-5xl text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </>
                </PhotoView>
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default PhotoGallery;
