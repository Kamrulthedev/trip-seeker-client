/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import bgBanner from "../../assets/images//banner/bg_page.jpg";
import { motion } from 'framer-motion';
import { ChevronRight, Home } from "lucide-react";


// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};


const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


const PageCover = ({ title }: { title: string; }) => {
  return (
    <div className="relative w-full h-80 overflow-hidden">
      <motion.img
        src={bgBanner}
        alt="Page Cover"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        className="relative h-full flex flex-col justify-center items-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight" variants={itemVariants}>
          {title}
        </motion.h1>
        <motion.div className="flex items-center gap-2 mt-4 text-lg" variants={itemVariants}>
          <Link to="/" className="hover:text-green-400 transition-colors flex items-center gap-1"><Home size={18} /> হোম</Link>
          <ChevronRight size={18} />
          <span className="text-green-400">{title}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default PageCover;
