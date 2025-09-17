/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import video1 from "../../../assets/videos/banner3.mp4";
import video2 from "../../../assets/videos/banner1.mp4";
import video3 from "../../../assets/videos/banner5.mp4";
import { BtnPrimary } from "../../ui/BtnPrimary";
import { motion } from "framer-motion";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.2,
    },
  },
};

const itemVariants:any = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const BannerSlide = ({ videoSrc, title, subtitle, buttonLink, textAlignment = 'start', contentAlignment = 'start' }: any) => {
  const contentBlockAlignmentClass = () => {
    switch(textAlignment) {
      case 'center':
        return 'items-center text-center';
      case 'right':
        return 'items-end text-right';
      default:
        return 'items-start text-left';
    }
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] lg:h-screen max-h-[950px] overflow-hidden">
      <video key={videoSrc} src={videoSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute inset-0 flex items-center justify-${contentAlignment}`}>
        <motion.div
          className={`container mx-auto text-white px-6 md:px-12 lg:px-20 flex flex-col ${contentBlockAlignmentClass()}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }} 
        >
          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-md mb-4" variants={itemVariants}>{title}</motion.h1>
          <motion.p className="text-md sm:text-lg max-w-xl drop-shadow-sm mb-8" variants={itemVariants}>{subtitle}</motion.p>
          <motion.div variants={itemVariants}>
             <Link to={buttonLink}>
               <BtnPrimary text="সার্ভিসসমূহ দেখুন" title="আমাদের সার্ভিসসমূহ" />
             </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const BannerItem1 = () => (
    <BannerSlide 
        videoSrc={video1}
        title="কক্সবাজার ও চট্টগ্রামের সৌন্দর্য আবিষ্কার করুন"
        subtitle="বাংলাদেশের সেরা অভিজ্ঞতাগুলো খুঁজে নিন আমাদের সাথে।"
        buttonLink="/services"
        textAlignment="left"
        contentAlignment="start"
    />
);

export const BannerItem2 = () => (
    <BannerSlide 
        videoSrc={video2}
        title="পাহাড় ও সমুদ্রে আপনার নির্ভরযোগ্য ভ্রমণ সঙ্গী"
        subtitle="অভিজ্ঞতা, সংস্কৃতি এবং অ্যাডভেঞ্চারের এক নতুন দিগন্ত।"
        buttonLink="/services"
        textAlignment="center"
        contentAlignment="center"
    />
);

export const BannerItem3 = () => (
    <BannerSlide 
        videoSrc={video3}
        title="সৈকত, পাহাড় ও সংস্কৃতি উপভোগ করুন"
        subtitle="আপনার স্বপ্নের ভ্রমণ এখান থেকেই শুরু হোক।"
        buttonLink="/services"
        textAlignment="right"
        contentAlignment="end"
    />
);