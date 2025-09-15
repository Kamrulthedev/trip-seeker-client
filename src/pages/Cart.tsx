


import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  // Demo cart data with Bengali text, based on user's request
  const [cartItems, setCartItems] = useState([
    {
      id: "cpl01",
      name: "রোমান্টিক বিচ গেটওয়ে",
      price: 14500,
      image: "https://placehold.co/100x100/A0E7E5/000000?text=Beach",
      location: "লাবণী ও কলাতলী পয়েন্ট, কক্সবাজার",
      quantity: 1
    },
    {
      id: "fml02",
      name: "সুন্দরবন অ্যাডভেঞ্চার",
      price: 18000,
      image: "https://placehold.co/100x100/F0B27A/000000?text=Forest",
      location: "সুন্দরবন, খুলনা",
      quantity: 2
    },
    {
      id: "mll03",
      name: "সাজেক ভ্যালি ট্যুর",
      price: 9500,
      image: "https://placehold.co/100x100/9ED5B2/000000?text=Hill",
      location: "সাজেক ভ্যালি, রাঙ্গামাটি",
      quantity: 1
    },
  ]);

  const shippingCost = 700;

  // Function to calculate subtotal and total
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + shippingCost;
    return { subtotal, total };
  };

  const { subtotal, total } = calculateTotals();

  // Function to handle quantity change
  const handleQuantityChange = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50">
      {/* Page Cover Section */}
      <div 
        className="relative h-64 md:h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: "url(https://placehold.co/1920x800/E9D8A6/000000?text=Trip+Seeker)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide animate-fade-in-down">আপনার শপিং কার্ট</h1>
        </div>
      </div>
      
      {/* Breadcrumb Section */}
      <div className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" className="hover:text-primary transition-colors duration-300">হোম</a>
          <span className="text-gray-400">/</span>
          <span className="text-primary font-semibold">আপনার শপিং কার্ট</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Cart Items Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">কার্টের সার্ভিসসমূহ</h2>
          <div className="hidden lg:grid grid-cols-5 p-4 bg-white border border-gray-200 rounded-lg shadow-sm font-semibold uppercase text-gray-600">
            <div className="col-span-2">সার্ভিসের নাম</div>
            <div className="text-center">মূল্য</div>
            <div className="text-center">সংখ্যা</div>
            <div className="text-center">মোট</div>
          </div>
          
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col lg:grid lg:grid-cols-5 items-center gap-4 lg:gap-0 transition-all duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Product Info */}
                <div className="flex items-center space-x-4 col-span-2 w-full lg:w-auto">
                  <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 rounded-md object-cover border border-gray-200 shadow-sm" />
                  <div className="flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="text-center text-lg font-semibold text-gray-800 mt-2 lg:mt-0 w-full lg:w-auto">
                  ৳{item.price.toLocaleString('bn-BD')}
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center justify-center space-x-2 mt-2 lg:mt-0 w-full lg:w-auto">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold text-lg text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="p-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                {/* Total per Item */}
                <div className="text-center text-lg font-bold text-gray-900 mt-2 lg:mt-0 w-full lg:w-auto">
                  ৳{(item.price * item.quantity).toLocaleString('bn-BD')}
                </div>
                
                {/* Remove Button */}
                <div className="flex justify-center mt-2 lg:mt-0 w-full lg:w-auto">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors duration-200"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm min-h-60 flex flex-col justify-center items-center text-xl text-gray-700 space-y-4 p-8 animate-fade-in">
              <p>আপনার কার্ট বর্তমানে খালি!</p>
              <a
                href="/products"
                className="bg-primary text-white py-3 rounded-md px-6 flex items-center justify-center gap-2 uppercase font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
              >
                দোকানে যান
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fish-off">
                  <path d="M18.84 13.92C18.42 16.14 16.48 18 14 18c-2.48 0-4.42-1.86-4.84-4.08"></path>
                  <path d="M12 18v2"></path>
                  <path d="M16 16.27A5.99 5.99 0 0 0 18 12c0-2.22-.96-4.22-2.52-5.55"></path>
                  <path d="M16.92 10.99A6 6 0 0 0 18 12c0 1.22-.44 2.34-1.16 3.29"></path>
                  <path d="M3 3v.01"></path>
                  <path d="M7.4 9.1a.999.999 0 0 0-.2-1.55l-2.6-1.3c-.6-.3-.9-.6-1-.9"></path>
                  <path d="M12.98 5.75c-1.25-.65-2.63-.98-4.14-.88L3 6c-2.6-1.5-2.82-3.8-1.74-5.32c.57-.84 1.76-1.12 3-1.08"></path>
                  <path d="M22 12c0 4.42-3.58 8-8 8c-1.25 0-2.43-.28-3.5-.8"></path>
                  <path d="M17.15 15.3A6.02 6.02 0 0 0 20 12c0-2.42-.99-4.6-2.56-6.14"></path>
                  <path d="m2 2 20 20"></path>
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="md:w-96 flex-shrink-0 bg-white p-6 rounded-lg shadow-xl border border-gray-200 animate-slide-in-right">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4 border-gray-200">সার্ভিসের বিবরণ</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-gray-600">
              <span className="text-lg">সাবটোটাল:</span>
              <span className="text-lg font-semibold text-gray-800">৳{subtotal.toLocaleString('bn-BD')}</span>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span className="text-lg">সার্ভিস চার্জ:</span>
              <span className="text-lg font-semibold text-gray-800">৳{shippingCost.toLocaleString('bn-BD')}</span>
            </div>
            <div className="flex justify-between items-center text-gray-600 border-t pt-4 border-gray-200">
              <span className="text-xl font-bold text-gray-900">সর্বমোট:</span>
              <span className="text-2xl font-bold text-primary">৳{total.toLocaleString('bn-BD')}</span>
            </div>
          </div>
          <button
            className="rounded-lg mt-8 text-white p-4 w-full flex items-center justify-center gap-2 uppercase font-semibold bg-primary hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 group"
          >
            চেকআউট করুন
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-check group-hover:ml-3 transition-all duration-300">
              <path d="M8 12.5V11.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1"></path>
              <path d="m8 11-1.25-5A2 2 0 0 1 8.71 4h6.58a2 2 0 0 1 1.96 2.04L16 11"></path>
              <circle cx="8" cy="20" r="1"></circle>
              <circle cx="16" cy="20" r="1"></circle>
              <path d="M16 4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path>
              <path d="M12 4v4"></path>
              <path d="M12 12v-1"></path>
              <path d="M22 6c-2-2-4-3.5-6-4.5"></path>
              <path d="M16 11v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4Z"></path>
              <path d="M20 11v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1"></path>
              <path d="M19.5 12h-3.5"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Tailwind and Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .container {
          max-width: 1280px;
        }
        .text-primary {
          color: #1a73e8; /* A shade of blue for branding */
        }
        .bg-primary {
          background-color: #1a73e8;
        }
        .hover\\:bg-primary-dark:hover {
          background-color: #1765cd;
        }

        /* Custom Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Cart;
