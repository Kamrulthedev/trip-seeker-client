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

const itemVariants : any = {
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


// A reusable Banner Slide component to avoid repetition
const BannerSlide = ({ videoSrc, title, subtitle, buttonLink, textAlignment = 'start', contentAlignment = 'start' } : any) => {
  const textAlignClass = `text-${textAlignment}`;
  const flexAlignClass = `justify-${contentAlignment}`;

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] lg:h-screen max-h-[950px] overflow-hidden">
      {/* Video Background */}
      <video
        key={videoSrc} // Add key to force re-render on slide change
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline // Important for iOS autoplay
      />
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className={`absolute inset-0 flex items-center ${flexAlignClass}`}>
        <motion.div
          className={`container mx-auto text-white px-6 md:px-12 lg:px-20 ${textAlignClass}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }} 
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-md mb-4"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg max-w-xl drop-shadow-sm mb-8"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className={`flex ${flexAlignClass}`}>
             <Link to={buttonLink}>
               <BtnPrimary text="Our Services" title="Our Services" />
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
        title="Explore Cox’s Bazar & Chittagong Like Never Before"
        subtitle="Discover the best experiences in Bangladesh"
        buttonLink="/services"
        textAlignment="left"
        contentAlignment="start"
    />
);

export const BannerItem2 = () => (
    <BannerSlide 
        videoSrc={video2}
        title="Bangladesh – Your Travel Partner to the Sea & Hills"
        subtitle="Experience nature, culture, and adventure"
        buttonLink="/services"
        textAlignment="center"
        contentAlignment="center"
    />
);

export const BannerItem3 = () => (
    <BannerSlide 
        videoSrc={video3}
        title="Explore Beaches, Hills & Culture of Bangladesh"
        subtitle="Your adventure starts here"
        buttonLink="/services"
        textAlignment="right"
        contentAlignment="end"
    />
);