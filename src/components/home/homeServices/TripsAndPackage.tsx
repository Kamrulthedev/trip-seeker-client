/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ServiceCardLoader } from "../../ui/loader/ServiceCardLoader";
import { ServiceCard } from "./HomeServices";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceDetailModal } from './HomeService';
import Beach1 from "../../../assets/images/Service/Beach1.jpg";
import Beach2 from "../../../assets/images/Service/Beach2.jpg";
import Beach3 from "../../../assets/images/Service/Beach3.jpg";
import Beach4 from "../../../assets/images/Service/Beach4.jpg";

import inaniImage1 from "../../../assets/images/Service/inaniImage1.jpg";
import inaniImage2 from "../../../assets/images/Service/inaniImage2.png";
import inaniImage3 from "../../../assets/images/Service/inaniImage3.png";
import inaniImage4 from "../../../assets/images/Service/inaniImage4.jpg";
import inaniTamil from "../../../assets/images/Service/inaniTamil.png";


import patuertek1 from "../../../assets/images/Service/patuertek1.jpg"; 
import patuertek2 from "../../../assets/images/Service/patuertek2.jpg"; 
import patuertek3 from "../../../assets/images/Service/patuertek3.jpg"; 
import patuertek4 from "../../../assets/images/Service/patuertek4.jpg"; 
import patuertekTamil from "../../../assets/images/Service/patuertekTamil.jpg"; 




// --- Mock Data for Travel Services with Features ---
const allTravelServices = [
  { id: 'beach01', name: 'Cox\'s Bazar Sunrise Tour', price: 120, thumbnail: Beach1, images: [ Beach1, Beach2, Beach3, Beach4], rating: 4.8, location: 'Cox\'s Bazar, Bangladesh', category: 'Beach Tours', description: 'Experience the breathtaking beauty of the worlds longest natural sea beach...', features: ["সব ধরনের হোটেল ও রিসোর্ট বুকিং", "নিরাপদে যাতায়াতের জন্য ট্রান্সপোর্ট সুবিধা", "সকালের নাস্তা থেকে শুরু করে দুপুরের এবং রাতের খাবারের ব্যবস্থা", "কক্সবাজারের সব জনপ্রিয় স্থানে ট্যুর"] },

  { id: 'beach02', name: 'Saint Martin\'s Coral Island', price: 250, thumbnail: inaniTamil, images: [inaniImage1, inaniImage2, inaniImage3, inaniImage4], rating: 4.9, location: 'Saint Martin, Bangladesh', category: 'Beach Tours', description: 'A 2-day trip to the beautiful coral island of Saint Martin...', features: ["AC Bus Ticket (Round Trip)", "Ship Ticket (Round Trip)", "Breakfast, Lunch, Dinner", "Full-time Tour Guide"] },

  { id: 'mountain01', name: 'Bandarban Hills & Clouds', price: 180, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4], rating: 4.7, location: 'Bandarban, Bangladesh', category: 'Mountain Treks', description: 'Trek through the stunning hills of Bandarban...', features: ["Local Transport (Chander Gari)", "Resort Accommodation", "All Meals Included", "Entry Fees to Tourist Spots"] },

  { id: 'cultural01', name: 'Historic Dhaka City Tour', price: 90, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4], rating: 4.6, location: 'Dhaka, Bangladesh', category: 'Cultural Trips', description: 'Explore the rich history of Old Dhaka...', features: ["Private Air-Conditioned Car", "English Speaking Guide", "All Entry Tickets", "Lunch at a Local Restaurant"] },

  { id: 'beach03', name: 'Kuakata "Daughter of the Sea"', price: 150, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4], rating: 4.7, location: 'Kuakata, Bangladesh', category: 'Beach Tours', description: 'Witness both sunrise and sunset from the same beach...', features: ["Hotel Accommodation", "Transport Facility", "Breakfast Included", "Guided Tour"] },

  { id: 'mountain02', name: 'Sajek Valley Expedition', price: 220, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4], rating: 4.9, location: 'Sajek, Rangamati', category: 'Mountain Treks', description: 'Live above the clouds in the stunning Sajek Valley...', features: ["Round Trip Transport", "Cottage Stay", "All Meals", "Local Guide"] },

  { id: 'cultural02', name: 'Sundarbans Mangrove Safari', price: 350, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4], rating: 4.8, location: 'Sundarbans, Khulna', category: 'Cultural Trips', description: 'Venture into the worlds largest mangrove forest...', features: ["3 Days 2 Nights Cruise", "All Meals on Board", "Forest Permits & Fees", "Armed Forest Guard"] },

   { id: 'beach03', name: 'Kuakata "Daughter of the Sea"', price: 150, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4], rating: 4.7, location: 'Kuakata, Bangladesh', category: 'Beach Tours', description: 'Witness both sunrise and sunset from the same beach...', features: ["Hotel Accommodation", "Transport Facility", "Breakfast Included", "Guided Tour"] },

  { id: 'cultural03', name: 'Ancient Puthia Temple City', price: 110, thumbnail: patuertekTamil, images: [patuertek1, patuertek2, patuertek3, patuertek4],rating: 4.5, location: 'Puthia, Rajshahi', category: 'Cultural Trips', description: 'Discover the largest number of historically important Hindu structures...', features: ["Private Transport", "Local Guide", "Entry Fees", "Lunch"] },
];

const categories = ["Beach Tours", "Mountain Treks", "Cultural Trips"];

// --- Component 4: TripsAndPackage (Main Component) ---
export const TripsAndPackage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = false; 

  const handleDetailsClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const filteredServices = allTravelServices.filter(service => service.category === activeCategory);

  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl md:text-5xl">Our Popular Tours & Packages</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Choose from our curated list of unforgettable experiences across Bangladesh. Your next adventure awaits!</p>
        </motion.div>
        <div className="flex justify-center my-10">
          <div className="flex flex-wrap justify-center gap-2 bg-slate-200 p-1.5 rounded-lg">
            {categories.map(category => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-md transition-colors duration-300 ${activeCategory === category ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:bg-slate-300/50'}`}>{category}</button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => <ServiceCardLoader key={index} />)
            : filteredServices.slice(0, 4).map(service => (<ServiceCard key={service.id} service={service} onDetailsClick={handleDetailsClick} />))
          }
        </div>

        <div className="text-center mt-16">
            <Link to="/services">
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">Explore More Services</button>
            </Link>
        </div>
      </div>
      <ServiceDetailModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
