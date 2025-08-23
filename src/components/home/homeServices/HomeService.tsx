/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { X } from 'lucide-react';

// This is a mock for shadcn/ui Dialog for a runnable example.
// In your project, you would import { Dialog, DialogContent } from "@/components/ui/dialog"
const Dialog = ({ open, onOpenChange, children }: { open: boolean, onOpenChange: (open: boolean) => void, children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
};
const DialogContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div 
    className={`relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto ${className}`}
    onClick={(e) => e.stopPropagation()}
  >
    {children}
  </div>
);


export const HomeServiceDetailModal = ({ service, isOpen, onClose }: { service: any, isOpen: boolean, onClose: () => void }) => {
  const [currentImage, setCurrentImage] = useState(service?.images[0]);
  const [travelers, setTravelers] = useState(1);

  useEffect(() => {
    // Reset to the first image when the service changes
    if (service) {
      setCurrentImage(service.images[0]);
      setTravelers(1);
    }
  }, [service]);

  if (!service) return null;

  const handleBookNow = () => {
    console.log("Booking Details:", {
      serviceId: service.id,
      serviceName: service.name,
      travelers: travelers,
      totalPrice: service.price * travelers,
    });
    alert(`Booking confirmed for ${travelers} person(s) on the "${service.name}" tour!`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-0">
        {/* Image Gallery */}
        <div className="relative flex flex-col p-4">
          <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
            <img src={currentImage} alt={service.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {service.images.map((img: string, index: number) => (
              <button key={index} onClick={() => setCurrentImage(img)} className={`rounded-md overflow-hidden border-2 ${currentImage === img ? 'border-blue-500' : 'border-transparent'}`}>
                <img src={img} alt={`${service.name} view ${index + 1}`} className="w-full h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="flex flex-col p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"><X size={24} /></button>
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full self-start">{service.category}</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-3">{service.name}</h2>
          <p className="text-3xl font-light text-green-600 my-4">${service.price}<span className="text-base text-gray-500">/person</span></p>
          <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
          
          <div className="border-t pt-6 mt-auto">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="travelers" className="font-medium text-gray-700">Travelers:</label>
                <input 
                  type="number" 
                  id="travelers"
                  min="1"
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 rounded-md border-gray-300 text-center font-bold"
                />
              </div>
              <button 
                onClick={handleBookNow}
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};