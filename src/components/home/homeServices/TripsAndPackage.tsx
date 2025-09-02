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
  // =========================
  // 🏝️ Couple & Friends Escape
  // =========================
  {
    id: "cpl01",
    name: "Romantic Beach Gateway",
    price: 14500,
    thumbnail: Beach1,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.8,
    location: "লাবণী ও কলাতলী পয়েন্ট, কক্সবাজার",
    category: "Couple & Friends Escape",
    description:
      "প্রিয়জন বা বন্ধুর সাথে কক্সবাজারের মনোরম সমুদ্রসৈকতে একান্ত সময় কাটান। কোনো প্রশ্ন থাকলে আমাদের নক করুন – আমরা সবসময় আপনার পাশে আছি।",
    features: [
      "৩ তারকা হোটেল (১ রাত, ২ দিন)",
      "সকালের নাস্তা ও রাতের খাবার",
      "এসি গাড়ি দ্বারা যাতায়াত",
      "লাবণী ও কলাতলী সৈকতে ভ্রমণ",
      "একজন গাইড",
    ],
  },
  {
    id: "cpl02",
    name: "Inani & Himchori Adventure",
    price: 16500,
    thumbnail: Beach2,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.7,
    location: "ইনানী ও হিমছড়ি, কক্সবাজার",
    category: "Couple & Friends Escape",
    description:
      "ঝরনা, পাহাড় আর ইনানীর ঝিনুক ভরা সৈকতে রোমাঞ্চকর ভ্রমণ। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ তারকা হোটেল (২ রাত, ৩ দিন)",
      "প্রাতঃরাশ ও রাতের খাবার",
      "এসি মাইক্রোবাস",
      "ইনানী বিচ ও হিমছড়ি ভ্রমণ",
      "একজন গাইড",
    ],
  },
  {
    id: "cpl03",
    name: "Maheshkhali Island Tour",
    price: 17500,
    thumbnail: Beach3,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.8,
    location: "মহেশখালী দ্বীপ",
    category: "Couple & Friends Escape",
    description:
      "মহেশখালীর পাহাড়, বৌদ্ধ মন্দির ও দ্বীপজীবনের স্বাদ নিতে দারুণ একটি ট্যুর। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ তারকা হোটেল (১ রাত, ২ দিন)",
      "নৌকা ভ্রমণ",
      "মহেশখালীর মন্দির ও পাহাড় দর্শন",
      "সী-ফুড ডিনার",
      "গাইড",
    ],
  },
  {
    id: "cpl04",
    name: "PatuaTek Sunset Escape",
    price: 15500,
    thumbnail: patuertekTamil,
    images: [patuertek1, patuertek2, patuertek3, patuertek4],
    rating: 4.6,
    location: "পাটুয়ারটেক, কক্সবাজার",
    category: "Couple & Friends Escape",
    description:
      "সন্ধ্যার সূর্যাস্ত আর শান্ত সৈকতে কাটুক আপনার সেরা সময়। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "২ তারকা হোটেল (১ রাত, ২ দিন)",
      "সন্ধ্যায় সূর্যাস্ত দেখা",
      "বারবিকিউ ডিনার",
      "প্রাইভেট কার",
      "একজন গাইড",
    ],
  },

  // =========================
  // 🌿 Explorer’s Special
  // =========================
  {
    id: "exp01",
    name: "Nature & Heritage Explorer",
    price: 22500,
    thumbnail: inaniTamil,
    images: [inaniImage1, inaniImage2, inaniImage3, inaniImage4],
    rating: 4.9,
    location: "রামু, হিমছড়ি, ইনানী",
    category: "Explorer’s Special",
    description:
      "প্রকৃতি আর ঐতিহ্যের মেলবন্ধন – পাহাড়, সমুদ্র আর রামুর বৌদ্ধ মন্দির ভ্রমণ। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৪ তারকা হোটেল (২ রাত, ৩ দিন)",
      "সব খাবারের ব্যবস্থা",
      "এসি কোস্টার",
      "হিমছড়ি ভিউপয়েন্ট, ইনানী বিচ, রামু ভ্রমণ",
      "২ জন গাইড",
    ],
  },
  {
    id: "exp02",
    name: "Sonadia Island Trip",
    price: 24500,
    thumbnail: Beach2,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.7,
    location: "সোনাদিয়া দ্বীপ",
    category: "Explorer’s Special",
    description:
      "পাখি দেখা, নিরিবিলি সৈকত আর প্রকৃতির শান্ত সৌন্দর্য উপভোগ করুন। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ তারকা হোটেল (২ রাত, ৩ দিন)",
      "নৌকা ভ্রমণ",
      "সোনাদিয়া দ্বীপ এক্সপ্লোর",
      "সী-ফুড স্পেশাল খাবার",
      "প্রফেশনাল গাইড",
    ],
  },
  {
    id: "exp03",
    name: "Teknaf & Naf River Tour",
    price: 25500,
    thumbnail: Beach3,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.8,
    location: "টেকনাফ, নাফ নদী",
    category: "Explorer’s Special",
    description:
      "বাংলাদেশের দক্ষিণ প্রান্ত টেকনাফ ভ্রমণ আর নাফ নদীর অপরূপ দৃশ্য উপভোগ করুন। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ তারকা হোটেল (২ রাত, ৩ দিন)",
      "এসি গাড়ি",
      "নাফ নদীতে নৌকা ভ্রমণ",
      "টেকনাফ সাবরাং পয়েন্ট ভ্রমণ",
      "গাইড",
    ],
  },
  {
    id: "exp04",
    name: "St. Martin’s Coral Island",
    price: 28500,
    thumbnail: Beach4,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 5.0,
    location: "সেন্ট মার্টিন দ্বীপ",
    category: "Explorer’s Special",
    description:
      "বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্ট মার্টিন ঘুরে দেখুন। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ রাত, ৪ দিনের প্যাকেজ",
      "সী-ফুড ও বারবিকিউ নাইট",
      "কক্সবাজার-টেকনাফ-সেন্ট মার্টিন ভ্রমণ",
      "লাক্সারি বোটে যাতায়াত",
      "২ জন গাইড",
    ],
  },

  // =========================
  // 👨‍👩‍👧 Family & Group Trips
  // =========================
  {
    id: "fam01",
    name: "Family Beach Holiday",
    price: 38000,
    thumbnail: Beach1,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.8,
    location: "কক্সবাজার প্রধান সমুদ্রসৈকত",
    category: "Family & Group Trips",
    description:
      "পরিবার নিয়ে সমুদ্রসৈকতের আনন্দে ভরা একটি ঝামেলামুক্ত ছুটি। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ তারকা হোটেল (২ রাত, ৩ দিন)",
      "সকালের নাস্তা, দুপুর ও রাতের খাবার",
      "বড় বাস/কোস্টার",
      "প্রধান সৈকত ও হিমছড়ি ভ্রমণ",
      "শিশুদের জন্য আলাদা খাবার",
    ],
  },
  {
    id: "fam02",
    name: "Safari & Sea Trip",
    price: 42000,
    thumbnail: Beach2,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.9,
    location: "ডুলাহাজারা সাফারি পার্ক, ইনানী",
    category: "Family & Group Trips",
    description:
      "প্রকৃতি, বন্যপ্রাণী আর সৈকতের আনন্দ – সব মিলিয়ে দারুণ এক ভ্রমণ। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৩ তারকা হোটেল (২ রাত, ৩ দিন)",
      "সব খাবার",
      "ডুলাহাজারা সাফারি পার্ক ভ্রমণ",
      "ইনানী বিচ ট্যুর",
      "২ জন গাইড",
    ],
  },
  {
    id: "fam03",
    name: "Kutubdia Island Group Tour",
    price: 46000,
    thumbnail: Beach3,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 4.7,
    location: "কুতুবদিয়া দ্বীপ",
    category: "Family & Group Trips",
    description:
      "কুতুবদিয়ার বাতিঘর আর নিরিবিলি সৈকতের মায়ায় কাটুক পরিবারিক ছুটি। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "২ রাত, ৩ দিনের প্যাকেজ",
      "ফেরি ভ্রমণ",
      "কুতুবদিয়ার বাতিঘর ভ্রমণ",
      "সী-ফুড ও বারবিকিউ ডিনার",
      "৩ জন গাইড",
    ],
  },
  {
    id: "fam04",
    name: "Luxury Family Vacation",
    price: 55000,
    thumbnail: Beach4,
    images: [Beach1, Beach2, Beach3, Beach4],
    rating: 5.0,
    location: "কক্সবাজার ও আশেপাশের দ্বীপ",
    category: "Family & Group Trips",
    description:
      "বড় পরিবার বা গ্রুপের জন্য বিলাসবহুল ট্যুর – সমুদ্র, দ্বীপ ও পাহাড় সব একসাথে। কোনো প্রশ্ন থাকলে আমাদের নক করুন।",
    features: [
      "৫ তারকা হোটেল (৩ রাত, ৪ দিন)",
      "সব ধরনের খাবার",
      "সেন্ট মার্টিন + ইনানী + হিমছড়ি ভ্রমণ",
      "প্রিমিয়াম কোস্টার",
      "ফটোগ্রাফি ও ভিডিওগ্রাফি",
      "২৪/৭ সিকিউরিটি",
    ],
  },
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
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl md:text-5xl p-3">আমাদের জনপ্রিয় ট্যুর ও প্যাকেজসমূহ</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">🌊 আপনার পরবর্তী অ্যাডভেঞ্চার এখান থেকেই শুরু হোক! বাংলাদেশের অদ্ভুত সুন্দর কক্সবাজার আপনাকে ডাকছে। বিশ্বের দীর্ঘতম সমুদ্রসৈকতের অনন্ত ঢেউ, সূর্যাস্তের মনোমুগ্ধকর দৃশ্য আর নিরবচ্ছিন্ন নীল আকাশে হারিয়ে যান।</p>
        </motion.div>
        <div className="flex justify-center my-10">
          <div className="flex flex-wrap justify-center gap-2 bg-gradient-to-r from-blue-200 to-green-200 text-white p-1.5 rounded-lg">
            {categories.map(category => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-md transition-colors duration-300 ${activeCategory === category ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:bg-slate-300/50'}`}>{category}</button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => <ServiceCardLoader key={index} />)
            : filteredServices.slice(0, 4).map(service => (<ServiceCard key={service.id} service={service} onDetailsClick={handleDetailsClick} />))
          }
        </div>

        <div className="text-center mt-16 flex justify-center">
            <BtnPrimary text="সকল প্যাকেজ দেখুন" title="সকল প্যাকেজ দেখুন" />
        </div>
      </div>
      <ServiceDetailModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};