/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { BtnPrimaryMini } from '../../ui/BtnPrimary';


// Animation variants for the individual card entrance
const itemVariants : any = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// TypeScript type definition for props
interface CategoryItemProps {
  img: string;
  category: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ img, category }) => {
  return (
    // The main motion component for the entrance animation
    <motion.div 
      variants={itemVariants}
      className="z-10 group overflow-hidden relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image with a smoother scaling effect */}
      <img
        src={img}
        alt={category}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
      
      {/* Overlay with a hover effect */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Content container with a slide-up animation on hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
        {/* This inner div will be hidden initially and appear on hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex flex-col justify-center items-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold capitalize drop-shadow-md">
            {category}
          </h2>
          <Link to={`/products?category=${encodeURIComponent(category)}`}>
            <BtnPrimaryMini text="প্যাকেজ সমূহ " title="প্যাকেজ দেখুন" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryItem;
