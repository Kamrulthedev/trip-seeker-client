/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { ImageLoader } from "../../ui/loader/ImageLoader";

export const ServiceCard = ({ service, onDetailsClick }: { service: any, onDetailsClick: (service: any) => void }) => {
  const { name, price, thumbnail, rating, location } = service || {};

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to cart:", service);
    alert(`"${name}" added to your cart!`);

  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to wishlist:", service);
    alert(`"${name}" added to your wishlist!`);

  };

  return (
    <motion.div className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer h-80 sm:h-96" onClick={() => onDetailsClick(service)} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
      <ImageLoader
        src={thumbnail}
        alt={service.name}
        className="w-full h-80 rounded-lg overflow-hidden mb-4"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button onClick={handleAddToWishlist} className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 shadow-md hover:bg-rose-500 transition-colors"><Heart size={20} /></button>
      </div>
      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1">
        <Star size={16} className="text-yellow-400 fill-yellow-400" />
        <span>{rating}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-sm font-medium">{location}</p>
        <h3 className="text-xl font-bold truncate mt-1 hidden sm:block">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-2xl font-semibold">৳{price} <span className="text-base font-normal opacity-80">/ জন</span></p>
          <button onClick={handleAddToCart} className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};