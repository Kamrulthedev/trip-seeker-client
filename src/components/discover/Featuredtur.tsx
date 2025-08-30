/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";




const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0, transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};



const Featuredtur = () => {
    const packages = [
      { id: 'pkg1', name: '৩ দিন ২ রাত - লাক্সারি বিচ স্টে', price: 15000, rating: 4.9, thumbnail: 'https://images.unsplash.com/photo-1610641818435-d27e1c902b37?q=80&w=2070&auto=format&fit=crop' },
      { id: 'pkg2', name: '২ দিন ১ রাত - হিমছড়ি অ্যাডভেঞ্চার', price: 8000, rating: 4.7, thumbnail: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1949&auto=format&fit=crop' },
      { id: 'pkg3', name: 'ইনানী বিচ ডে-ট্রিপ', price: 4500, rating: 4.8, thumbnail: 'https://images.unsplash.com/photo-1579532588444-644a431b32ce?q=80&w=2070&auto=format&fit=crop' },
    ];
    return (
        <div className="bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-12" initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">ফিচার্ড ট্যুর প্যাকেজ</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {packages.map(pkg => (
                         <motion.div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden group" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
                             <div className="relative h-56">
                                 <img src={pkg.thumbnail} alt={pkg.name} className="w-full h-full object-cover"/>
                                 <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-1">
                                     <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                     <span>{pkg.rating}</span>
                                 </div>
                             </div>
                             <div className="p-5">
                                 <h3 className="text-lg font-bold text-gray-800 truncate">{pkg.name}</h3>
                                 <div className="flex justify-between items-center mt-4">
                                     <p className="text-xl font-semibold text-green-600">৳{pkg.price.toLocaleString('bn-BD')} <span className="text-sm font-normal text-gray-500">/ জন</span></p>
                                     <Link to={`/tours/${pkg.id}`} className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        বিস্তারিত <ArrowRight size={16} />
                                     </Link>
                                 </div>
                             </div>
                         </motion.div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default Featuredtur;