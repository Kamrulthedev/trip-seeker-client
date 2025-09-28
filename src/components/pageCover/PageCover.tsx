/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { ChevronRight, Home } from "lucide-react";
import { ImageLoader } from "../ui/loader/ImageLoader";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Main Page Cover Component
const PageCover = ({ title, image }: { title: string; image: any; }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <ImageLoader src={image} alt="Page Cover" className="w-full h-full" />
      </motion.div>
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        className="relative h-full flex flex-col justify-center items-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl font-extrabold tracking-tight text-center" variants={itemVariants}>
          {title}
        </motion.h1>
        <motion.div className="flex items-center gap-2 mt-4 text-lg" variants={itemVariants}>
          <Link to="/" className="hover:text-green-400 transition-colors flex items-center gap-1"><Home size={18} /> Home</Link>
          <ChevronRight size={18} />
          <span className="text-green-400">{title}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageCover;
