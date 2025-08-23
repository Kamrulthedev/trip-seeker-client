/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';

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
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      onClick={() => onDetailsClick(service)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img src={thumbnail} alt={name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-1">
          <Star size={16} className="text-yellow-500 fill-yellow-500" />
          <span>{rating}</span>
        </div>
        {/* Hover Action Buttons */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handleAddToCart} className="bg-white rounded-full p-3 shadow-md hover:bg-green-500 hover:text-white transition-colors"><ShoppingCart size={20} /></button>
          <button onClick={handleAddToWishlist} className="bg-white rounded-full p-3 shadow-md hover:bg-rose-500 hover:text-white transition-colors"><Heart size={20} /></button>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-500 text-sm">{location}</p>
        <h3 className="text-lg font-bold text-gray-800 truncate mt-1 group-hover:text-blue-600 transition-colors">{name}</h3>
        <p className="text-xl font-semibold text-green-600 mt-2">${price} <span className="text-sm font-normal text-gray-500">/ person</span></p>
      </div>
    </motion.div>
  );
};