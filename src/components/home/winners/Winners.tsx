/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import winners from "../../../assets/Winners-new.jpg";
import winners1 from "../../../assets/Winner.jpg";




const containerVariants:any = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Winners = () => {
  return (
    <div className="bg-slate-50 p-4 sm:p-8 md:p-12">
      <motion.div
        className="relative container mx-auto rounded-2xl shadow-2xl overflow-hidden group h-[60vh] md:h-[70vh]"
        style={{ transformStyle: 'preserve-3d' }}
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 3D Tilt Effect Container */}
        <motion.div
          className="absolute inset-0"
          whileHover={{
            rotateX: 5,
            rotateY: -5,
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
        >
          {/* Background Image - Fills the entire container */}
          <img 
            src={winners} 
            alt="Happy travelers at a tourist destination"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Award Badge */}
          <motion.div 
            className="absolute top-6 right-6 flex flex-col items-center bg-yellow-400/90 text-yellow-900 p-3 rounded-full shadow-lg backdrop-blur-sm"
            variants={itemVariants}
          >
            <Award size={28} />
            <span className="font-bold text-lg">2025</span>
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-16 max-w-2xl">
              <motion.h1 
                className="text-4xl p-3 md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 drop-shadow-md"
                variants={itemVariants}
              >
                বিশ্বের সেরা ভ্রমণ অভিজ্ঞতা
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-slate-200 drop-shadow-sm"
                variants={itemVariants}
              >
                ২০২৫ সালের সেরা ভ্রমণ অ্যাওয়ার্ড বিজয়ীদের সাথে আপনার পরবর্তী ভ্রমণকে স্মরণীয় করে তুলুন।
              </motion.p>
              <motion.button 
                className="mt-8 group inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-bold py-3 px-8 rounded-full shadow-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105"
                variants={itemVariants}
              >
                বিজয়ীদের দেখুন
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Winners;