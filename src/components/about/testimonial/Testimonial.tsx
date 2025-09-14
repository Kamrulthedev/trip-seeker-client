import { motion } from 'framer-motion';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clientAvater1 from "../../../assets/images/testimonial/Member1.png"
import clientAvater2 from "../../../assets/images/testimonial/member2.png"
import clientAvater3 from "../../../assets/images/testimonial/Member3.jpg"
import clientAvater4 from "../../../assets/images/testimonial/Testimonial1.jpg"
import { Quote, Star } from 'lucide-react';
import testimonialBg from "../../../assets/images/TestimonialBg.jpg";


const testimonials = [
  { name: 'রাকিবুল হাসান', location: 'ঢাকা', quote: 'Trip Seeker-এর সাথে আমার সেন্ট মার্টিন ভ্রমণটি ছিল অসাধারণ! তাদের ব্যবস্থাপনা এবং আন্তরিকতা সত্যিই প্রশংসার যোগ্য।', avatar: clientAvater1, rating: 5 },
  { name: 'ফারজানা আক্তার', location: 'চট্টগ্রাম', quote: 'সাজেক ভ্যালির মেঘের রাজ্যে হারিয়ে যাওয়ার অভিজ্ঞতা ভোলার নয়। ধন্যবাদ Trip Seeker টিমকে এত সুন্দর একটি ট্যুর আয়োজন করার জন্য।', avatar: clientAvater2, rating: 5 },
  { name: 'ইমরান হোসেন', location: 'খুলনা', quote: 'সুন্দরবন সাফারি ছিল এক কথায় রোমাঞ্চকর। তাদের গাইড খুবই অভিজ্ঞ এবং সবকিছু খুব গোছানো ছিল। আমি আবার তাদের সাথে ভ্রমণ করতে চাই।', avatar: clientAvater3, rating: 4 },
  { name: 'ইমরান হোসেন', location: 'খুলনা', quote: 'সুন্দরবন সাফারি ছিল এক কথায় রোমাঞ্চকর। তাদের গাইড খুবই অভিজ্ঞ এবং সবকিছু খুব গোছানো ছিল। আমি আবার তাদের সাথে ভ্রমণ করতে চাই।', avatar: clientAvater4, rating: 4 },
];



const Testimonial = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Set Image */}
      <div className="absolute inset-0">
        <img src={testimonialBg} alt="Happy travelers background" className="w-full h-full object-cover filter blur-sm scale-110" />
        <div className="absolute inset-0 "></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:text-5xl md:text-4xl p-3">আমাদের ভ্রমণকারীরা যা বলেন</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">আমাদের সেবায় সন্তুষ্ট ভ্রমণকারীদের অভিজ্ঞতাগুলো দেখুন।</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full max-w-md h-80"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl flex flex-col justify-between p-8 border border-white/50">
                <Quote className="absolute top-6 left-6 text-green-300" size={40} />
                <p className="text-gray-700 italic mt-10">"{item.quote}"</p>
                <div className="flex items-center mt-6">
                  <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-green-400" />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-current" />)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;