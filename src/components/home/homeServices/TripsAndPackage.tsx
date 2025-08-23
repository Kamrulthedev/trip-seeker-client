/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { HomeServiceDetailModal } from "./HomeService";
import { ServiceCardLoader } from "../../ui/loader/ServiceCardLoader";
import { ServiceCard } from "./HomeServices";
import { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Mock Data for Travel Services ---
const allTravelServices = [
  { id: 'beach01', name: 'Cox\'s Bazar Sunrise Tour', price: 120, thumbnail: 'https://images.unsplash.com/photo-1617327181385-b305713b4f6f?q=80&w=800', images: ['https://images.unsplash.com/photo-1617327181385-b305713b4f6f?q=80&w=800', 'https://images.unsplash.com/photo-1588253969500-3075a331dfa9?q=80&w=800', 'https://images.unsplash.com/photo-1618751939022-835a23534bda?q=80&w=800', 'https://images.unsplash.com/photo-1590523277543-a94d28524035?q=80&w=800'], rating: 4.8, location: 'Cox\'s Bazar, Bangladesh', category: 'Beach Tours', description: 'Experience the breathtaking beauty of the worlds longest natural sea beach. This tour includes a guided visit to Himchari National Park and Inani Beach, with opportunities for parasailing.' },

  { id: 'beach02', name: 'Saint Martin\'s Coral Island', price: 250, thumbnail: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?q=80&w=800', images: ['https://images.unsplash.com/photo-1591017403286-fd8493524e1e?q=80&w=800', 'https://images.unsplash.com/photo-1624555130298-eafde7861039?q=80&w=800', 'https://images.unsplash.com/photo-1589913589384-2278b5a4b78b?q=80&w=800', 'https://images.unsplash.com/photo-1605537932112-52a55988a536?q=80&w=800'], rating: 4.9, location: 'Saint Martin, Bangladesh', category: 'Beach Tours', description: 'A 2-day trip to the beautiful coral island of Saint Martin. Enjoy snorkeling, scuba diving, and fresh seafood on this serene getaway.' },

  { id: 'mountain01', name: 'Bandarban Hills & Clouds', price: 180, thumbnail: 'https://images.unsplash.com/photo-1605915492168-de86a42b1154?q=80&w=800', images: ['https://images.unsplash.com/photo-1605915492168-de86a42b1154?q=80&w=800', 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800', 'https://images.unsplash.com/photo-1572003818344-36a5a805757d?q=80&w=800', 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800'], rating: 4.7, location: 'Bandarban, Bangladesh', category: 'Mountain Treks', description: 'Trek through the stunning hills of Bandarban. This package includes visits to Nilgiri, Chimbuk Hill, and a stay in a traditional tribal cottage.' },

  { id: 'cultural01', name: 'Historic Dhaka City Tour', price: 90, thumbnail: 'https://images.unsplash.com/photo-1596422846543-3d0773151e23?q=80&w=800', images: ['https://images.unsplash.com/photo-1596422846543-3d0773151e23?q=80&w=800', 'https://images.unsplash.com/photo-1605649487212-47566102d312?q=80&w=800', 'https://images.unsplash.com/photo-1561571994-3c6d6893b137?q=80&w=800', 'https://images.unsplash.com/photo-1615903998787-2387313391e9?q=80&w=800'], rating: 4.6, location: 'Dhaka, Bangladesh', category: 'Cultural Trips', description: 'Explore the rich history of Old Dhaka. Visit key landmarks like Lalbagh Fort, Ahsan Manzil (Pink Palace), and experience a traditional rickshaw ride.' },

  { id: 'beach03', name: 'Kuakata "Daughter of the Sea"', price: 150, thumbnail: 'https://images.unsplash.com/photo-1627895429920-ce3c2a02e0b1?q=80&w=800', images: ['https://images.unsplash.com/photo-1627895429920-ce3c2a02e0b1?q=80&w=800'], rating: 4.7, location: 'Kuakata, Bangladesh', category: 'Beach Tours', description: 'Witness both sunrise and sunset from the same beach. A unique experience in Kuakata, including a visit to the nearby mangrove forest.' },

  { id: 'mountain02', name: 'Sajek Valley Expedition', price: 220, thumbnail: 'https://images.unsplash.com/photo-1618049339391-48b18aa2b929?q=80&w=800', images: ['https://images.unsplash.com/photo-1618049339391-48b18aa2b929?q=80&w=800'], rating: 4.9, location: 'Sajek, Rangamati', category: 'Mountain Treks', description: 'Live above the clouds in the stunning Sajek Valley. This 3-day tour offers breathtaking views, tribal culture, and serene nature.' },

  { id: 'cultural02', name: 'Sundarbans Mangrove Safari', price: 350, thumbnail: 'https://images.unsplash.com/photo-1547902243-6d5a1a5b3f71?q=80&w=800', images: ['https://images.unsplash.com/photo-1547902243-6d5a1a5b3f71?q=80&w=800'], rating: 4.8, location: 'Sundarbans, Khulna', category: 'Cultural Trips', description: 'Venture into the worlds largest mangrove forest, a UNESCO World Heritage site. A thrilling boat safari with chances to spot the Royal Bengal Tiger.' },

  { id: 'beach03', name: 'Kuakata "Daughter of the Sea"', price: 150, thumbnail: 'https://images.unsplash.com/photo-1627895429920-ce3c2a02e0b1?q=80&w=800', images: ['https://images.unsplash.com/photo-1627895429920-ce3c2a02e0b1?q=80&w=800'], rating: 4.7, location: 'Kuakata, Bangladesh', category: 'Beach Tours', description: 'Witness both sunrise and sunset from the same beach. A unique experience in Kuakata, including a visit to the nearby mangrove forest.' },

  { id: 'cultural03', name: 'Ancient Puthia Temple City', price: 110, thumbnail: 'https://images.unsplash.com/photo-1628042835452-71589c9a35e7?q=80&w=800', images: ['https://images.unsplash.com/photo-1628042835452-71589c9a35e7?q=80&w=800'], rating: 4.5, location: 'Puthia, Rajshahi', category: 'Cultural Trips', description: 'Discover the largest number of historically important Hindu structures in Bangladesh. A day trip exploring the magnificent terracotta temples.' },
];

const categories = ["Beach Tours", "Mountain Treks", "Cultural Trips"];


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
        
        {/* UPDATED: grid-cols-2 for small devices */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => <ServiceCardLoader key={index} />)
            : filteredServices.slice(0, 8).map(service => (<ServiceCard key={service.id} service={service} onDetailsClick={handleDetailsClick} />))
          }
        </div>

        <div className="text-center mt-16">
            <Link to="/services">
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">Explore More Services</button>
            </Link>
        </div>
      </div>
      <HomeServiceDetailModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};