/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hotel, Sailboat, Utensils, Waves } from "lucide-react";
import { motion } from "framer-motion";
const keyHighlightBg = "https://images.unsplash.com/photo-1582993838397-2a491b452857?q=80&w=1974&auto=format&fit=crop";




const itemVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0, transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};




const Keyhighlight = () => {
    const highlights = [
        { icon: <Waves size={32} />, title: "দীর্ঘতম সমুদ্র সৈকত", description: "১২০ কিমি দীর্ঘ পৃথিবীর দীর্ঘতম প্রাকৃতিক বালুকাময় সৈকত।" },
        { icon: <Hotel size={32} />, title: "বিলাসবহুল হোটেল", description: "আন্তর্জাতিক মানের হোটেল এবং রিসোর্টের সমাহার।" },
        { icon: <Utensils size={32} />, title: "ফ্রেশ সামুদ্রিক খাবার", description: "টাটকা সামুদ্রিক মাছ এবং স্থানীয় খাবারের স্বাদ নিন।" },
        { icon: <Sailboat size={32} />, title: "অ্যাডভেঞ্চার স্পোর্টস", description: "প্যারাসেলিং, সার্ফিং এবং বিচ বাইকিং এর রোমাঞ্চ।" },
    ];
    return (
        <div className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative p-8 rounded-xl bg-white shadow-lg overflow-hidden text-center group"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-green-100 text-blue-600 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Keyhighlight;