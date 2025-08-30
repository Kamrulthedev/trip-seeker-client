
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Wheretostay = () => {
    const hotels = [
        { name: " রয়েল টিউলিপ সি পার্ল", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop"},
        { name: "সায়মন বিচ রিসোর্ট", image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop"},
        { name: "লং বিচ হোটেল", image: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop"},
        { name: "মারমেইড বিচ রিসোর্ট", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"},
    ];

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-12" initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">কোথায় থাকবেন?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">কক্সবাজারের সেরা কিছু হোটেল এবং রিসোর্ট।</p>
                </motion.div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {hotels.map((hotel, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-96 rounded-xl overflow-hidden group">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                                    <h3 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2">{hotel.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Wheretostay;