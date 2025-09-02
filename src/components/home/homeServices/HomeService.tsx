/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageLoader } from "../../ui/loader/ImageLoader";





export const ServiceDetailModal = ({ service, isOpen, onClose }: { service: any, isOpen: boolean, onClose: () => void }) => {
  const [currentImage, setCurrentImage] = useState(service?.images[0]);
  const [travelers, setTravelers] = useState(1);

  useEffect(() => {
    if (service) {
      setCurrentImage(service.images[0]);
      setTravelers(1);
    }
  }, [service]);

  const handleBookNow = () => {
    console.log("Booking Details:", { serviceId: service.id, serviceName: service.name, travelers, totalPrice: service.price * travelers });
    alert(`Booking confirmed for ${travelers} person(s) on the "${service.name}" tour!`);
    onClose();
  };

  const handleRatingClick = () => {
    console.log("রেটিং কেন্সেল");
    alert("Rating button clicked! Check console.");
  };

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants: any = {
    hidden: { y: "10vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { y: "10vh", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-0"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Gallery */}
            <div className="relative flex flex-col p-4">
              <ImageLoader
                src={currentImage}
                alt={service.name}
                className="w-full h-80 rounded-lg overflow-hidden mb-4"
              />
              <div className="grid grid-cols-4 gap-2">
                {service.images.map((img: string, index: number) => (
                  <button key={index} onClick={() => setCurrentImage(img)} className={`rounded-md overflow-hidden border-2 transition-all ${currentImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}>
                    <ImageLoader
                      src={img}
                      alt={`${service.name} view ${index + 1}`}
                      className="w-full h-20"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="flex flex-col p-6 bg-slate-50">
              <button
                onClick={onClose}
                className=" absolute top-4 right-4 flex items-center justify-center text-red-600 hover:text-red-500 transition-all duration-200 rounded-full active:scale-90 hover:rotate-90 p-2 bg-red-200 shadow-sm lg:p-0 lg:bg-transparent lg:shadow-none">
                <X size={24} />
              </button>
              <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full self-start">{service.category}</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-3">{service.name}</h2>

              <div className="flex items-center gap-4 my-4">
                <p className="text-3xl font-light text-green-600">৳{service.price}<span className="text-base text-gray-500">/person</span></p>
                <button onClick={handleRatingClick} className="flex items-center gap-1 text-yellow-500 font-semibold">
                  <Star size={20} className="fill-current" /> {service.rating}
                </button>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-bold text-gray-700 mb-2">আমাদের প্যাকেজে যা যা থাকছে:</h4>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">✅<span>{feature}</span></li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-6 mt-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <label htmlFor="travelers" className="font-medium text-gray-700">Travelers:</label>
                    <input type="number" id="travelers" min="1" value={travelers} onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))} className="w-20 rounded-md border-gray-300 text-center font-bold" />
                  </div>
                  <button onClick={handleBookNow} className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">Book Now</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};