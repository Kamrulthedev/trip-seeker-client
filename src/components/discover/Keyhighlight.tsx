/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hotel, Sailboat, Utensils, Waves } from "lucide-react";
import { motion } from "framer-motion";
import key_bg from "../../assets/images/discover/key-bg.jpg";

// --- Framer Motion Variants ---
const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
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
        <div className="relative py-20 sm:py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img src={key_bg} alt="Cox's Bazar Beach" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                        <motion.span
                            className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            কক্সবাজারের মূল আকর্ষণ
                        </motion.span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                        যে অভিজ্ঞতাগুলো আপনার ভ্রমণকে স্মরণীয় করে তুলবে।
                    </p>
                </motion.div>

                <motion.div
                    // UPDATED: Responsive grid
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center group text-white shadow-xl"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <div className="relative z-10">
                                {/* Animated Icon Background */}
                                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full mb-6 relative overflow-hidden transition-all duration-300 group-hover:scale-110">
                                     <motion.div
                                        className="absolute inset-[-10px] bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)]"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                     />
                                     <div className="relative z-10 w-[72px] h-[72px] bg-slate-800/50 rounded-full flex items-center justify-center">
                                        {item.icon}
                                     </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-white/80">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Keyhighlight;