/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ServiceCardLoader } from "../../ui/loader/ServiceCardLoader";
import { ServiceCard } from "./HomeServices";
import { useState } from 'react';
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
import { BtnPrimary } from '../../ui/BtnPrimary';




const allTravelServices = [
  // Couple & Friends Escape
  { id: 'cpl01', name: 'কক্সবাজার সূর্যোদয় ট্যুর', price: 4500, thumbnail: Beach1, images: [Beach1, Beach2, Beach3, Beach4], rating: 4.8, location: 'কক্সবাজার, বাংলাদেশ', category: 'Couple & Friends Escape', description: 'বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকতের শ্বাসরুদ্ধকর সৌন্দর্য উপভোগ করুন।', features: ["৩ তারকা হোটেলে থাকার ব্যবস্থা", "নিরাপদ যাতায়াতের জন্য এসি বাস", "সকালের নাস্তা এবং রাতের খাবার", "হিমছড়ি ও ইনানী বিচে ভ্রমণ"] },
  { id: 'cpl02', name: 'সেন্ট মার্টিন প্রবাল দ্বীপ', price: 7500, thumbnail: inaniTamil, images: [inaniTamil, Beach2], rating: 4.9, location: 'সেন্ট মার্টিন, বাংলাদেশ', category: 'Couple & Friends Escape', description: 'বাংলাদেশের একমাত্র প্রবাল দ্বীপে ২ দিনের একটি অসাধারণ ভ্রমণ।', features: ["এসি বাস ও জাহাজের টিকিট", "সকালের নাস্তা, দুপুর ও রাতের খাবার", "স্নোরকেলিং এবং স্কুবা ডাইভিং", "সার্বক্ষণিক ট্যুর গাইড"] },
  { id: 'cpl03', name: 'সাজেক ভ্যালি মেঘের রাজ্য', price: 6500, thumbnail: Beach1, images: [Beach1, Beach2, Beach3, Beach4], rating: 4.9, location: 'সাজেক, রাঙ্গামাটি', category: 'Couple & Friends Escape', description: 'মেঘের উপরে বসবাসের এক অসাধারণ অভিজ্ঞতা অর্জন করুন।', features: ["রাউন্ড ট্রিপ ট্রান্সপোর্ট (চান্দের গাড়ি)", "ইকো-ফ্রেন্ডলি কটেজে থাকা", "প্রতিদিনের তিন বেলা খাবার", "স্থানীয় দর্শনীয় স্থান ভ্রমণ"] },
  { id: 'cpl04', name: 'টাঙ্গুয়ার হাওর ভ্রমণ', price: 5500, thumbnail: Beach1, images: [Beach1, Beach2, Beach3, Beach4], rating: 4.7, location: 'সুনামগঞ্জ, বাংলাদেশ', category: 'Couple & Friends Escape', description: 'বাংলাদেশের দ্বিতীয় বৃহত্তম মিঠাপানির জলাভূমিতে নৌকায় রাত্রিযাপন।', features: ["হাউসবোটে থাকার ব্যবস্থা", "সকল খাবার (স্থানীয় মেনু)", "ওয়াচ টাওয়ার ও ছোট ছোট গ্রাম ভ্রমণ", "নিরাপত্তা সরঞ্জাম"] },
  
  // Explorer’s Special
  { id: 'exp01', name: 'বান্দরবান ট্রেকিং অভিযান', price: 8000, thumbnail: patuertekTamil, images: [patuertekTamil], rating: 4.7, location: 'বান্দরবান, বাংলাদেশ', category: 'Explorer’s Special', description: 'বান্দরবানের অত্যাশ্চর্য পাহাড়ের মধ্য দিয়ে ট্রেকিং করুন।', features: ["স্থানীয় পরিবহন (চান্দের গাড়ি)", "রিসোর্টে থাকার ব্যবস্থা", "প্রতিদিনের খাবার", "জনপ্রিয় স্থানসমূহে প্রবেশ ফি"] },
  { id: 'exp02', name: 'সুন্দরবন ম্যানগ্রোভ সাফারি', price: 12500, thumbnail: Beach1, images: [Beach1, Beach2, Beach3, Beach4], rating: 4.8, location: 'সুন্দরবন, খুলনা', category: 'Explorer’s Special', description: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ বনে একটি রোমাঞ্চকর নৌকা সাফারি।', features: ["৩ দিন ২ রাত ক্রুজ জাহাজে থাকা", "সকল খাবার", "বন বিভাগের অনুমতি ও ফি", "সশস্ত্র বন প্রহরী"] },
  { id: 'exp03', name: 'নাফাখুম জলপ্রপাত অভিযান', price: 7800, thumbnail: 'https://images.unsplash.com/photo-1572003818344-36a5a805757d?q=80&w=800', images: ['https://images.unsplash.com/photo-1572003818344-36a5a805757d?q=80&w=800'], rating: 4.6, location: 'বান্দরবান, বাংলাদেশ', category: 'Explorer’s Special', description: 'বাংলাদেশের অন্যতম সুন্দর জলপ্রপাত নাফাখুমে একটি চ্যালেঞ্জিং ট্রেকিং।', features: ["গাইড এবং পোর্টার", "থাকার জন্য আদিবাসী বাড়ি", "সকল খাবার", "নিরাপত্তা ও প্রাথমিক চিকিৎসা"] },
  { id: 'exp04', name: 'হামহাম জলপ্রপাত ও রাজকান্দি', price: 6200, thumbnail: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800', images: ['https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800'], rating: 4.5, location: 'মৌলভীবাজার, সিলেট', category: 'Explorer’s Special', description: 'সিলেটের গহীন জঙ্গলে অবস্থিত হামহাম জলপ্রপাতে রোমাঞ্চকর অভিযান।', features: ["ট্রান্সপোর্ট ও স্থানীয় গাইড", "সকালের নাস্তা ও দুপুরের খাবার", "লাইফ জ্যাকেট", "প্রবেশ ফি"] },

  // Family & Group Trips
  { id: 'fam01', name: 'ঐতিহাসিক ঢাকা সিটি ট্যুর', price: 3500, thumbnail: Beach1, images: [Beach1, Beach2, Beach3, Beach4], rating: 4.6, location: 'ঢাকা, বাংলাদেশ', category: 'Family & Group Trips', description: 'পুরান ঢাকার সমৃদ্ধ ইতিহাস ঘুরে দেখুন।', features: ["শীতাতপ নিয়ন্ত্রিত প্রাইভেট গাড়ি", "ইংরেজিভাষী গাইড", "সকল প্রবেশ টিকিট", "ঐতিহ্যবাহী পুরান ঢাকার খাবার"] },
  { id: 'fam02', name: 'শ্রীমঙ্গল চা বাগান ভ্রমণ', price: 4800, thumbnail: Beach1, images: [Beach1, Beach2, Beach3, Beach4], rating: 4.8, location: 'শ্রীমঙ্গল, সিলেট', category: 'Family & Group Trips', description: 'বাংলাদেশের চায়ের রাজধানীতে একটি শান্তিময় ভ্রমণ।', features: ["লাক্সারি রিসোর্টে থাকা", "চা বাগানে ভ্রমণ ও চা-পান", "লাউয়াছড়া জাতীয় উদ্যান ভ্রমণ", "সকালের নাস্তা"] },
  { id: 'fam03', name: 'বগা লেক ও কেওক্রাডং', price: 8500, thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800', images: ['https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800'], rating: 4.7, location: 'বান্দরবান, বাংলাদেশ', category: 'Family & Group Trips', description: 'পাহাড়ের চূড়ায় অবস্থিত বগা লেকে ক্যাম্পিং এবং কেওক্রাডং চূড়া জয়।', features: ["চান্দের গাড়ি", "ক্যাম্পিং সরঞ্জাম", "সকল খাবার", "অভিজ্ঞ গাইড"] },
  { id: 'fam04', name: 'প্রাচীন পুঠিয়া মন্দির নগরী', price: 4200, thumbnail: 'https://images.unsplash.com/photo-1628042835452-71589c9a35e7?q=80&w=800', images: ['https://images.unsplash.com/photo-1628042835452-71589c9a35e7?q=80&w=800'], rating: 4.5, location: 'পুঠিয়া, রাজশাহী', category: 'Family & Group Trips', description: 'ঐতিহাসিকভাবে গুরুত্বপূর্ণ হিন্দু মন্দিরগুলো ঘুরে দেখুন।', features: ["প্রাইভেট ট্রান্সপোর্ট", "স্থানীয় গাইড", "প্রবেশ ফি", "দুপুরের খাবার"] }
];

const categories = ["Couple & Friends Escape", "Explorer’s Special", "Family & Group Trips"];

// --- Component 5: TripsAndPackage (Main Component) ---
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
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl md:text-5xl p-3">আমাদের জনপ্রিয় ট্যুর ও প্যাকেজসমূহ</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">আপনার পরবর্তী অ্যাডভেঞ্চার এখান থেকেই শুরু হোক! বাংলাদেশের अविस्मरणीय অভিজ্ঞতাগুলো থেকে বেছে নিন।</p>
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
            <BtnPrimary text="সকল সার্ভিস দেখুন" title="Our Services" />
        </div>
      </div>
      <ServiceDetailModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};