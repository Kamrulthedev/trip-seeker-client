/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Lightbulb, MapPin, ShieldCheck, ShoppingCart } from "lucide-react";

// একটি সুন্দর ব্যাকগ্রাউন্ড ইমেজ যোগ করা হয়েছে
const tipsBgImage = "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop";

// --- Framer Motion Variants ---
const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const TravelTips = () => {
    // Adding a fourth tip as requested
    const tips = [
        { icon: <MapPin size={28} />, title: "সেরা সময়", description: "অক্টোবর থেকে মার্চ মাস কক্সবাজার ভ্রমণের জন্য সবচেয়ে উপযুক্ত সময়।" },
        { icon: <ShieldCheck size={28} />, title: "নিরাপত্তা", description: "সর্বদা নির্ধারিত জোনে সাঁতার কাটুন এবং লাইফগার্ডের নির্দেশনা মেনে চলুন।" },
        { icon: <ShoppingCart size={28} />, title: "দর কষাকষি", description: "স্থানীয় বাজারে কেনাকাটার আগে ভালোভাবে দর কষাকষি করে নিন।" },
        { icon: <Lightbulb size={28} />, title: "স্থানীয় সংস্কৃতি", description: "স্থানীয় ঐতিহ্য ও সংস্কৃতির প্রতি শ্রদ্ধাশীল থাকুন এবং তাদের রীতিনীতি মেনে চলুন।" },
    ];

    return (
        <div className="relative py-20 sm:py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img src={tipsBgImage} alt="Travel map and essentials" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        <motion.span
                            className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            ভ্রমণ টিপস
                        </motion.span>
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                        আপনার ভ্রমণকে আরও আনন্দদায়ক এবং মসৃণ করার জন্য কিছু গুরুত্বপূর্ণ পরামর্শ।
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {tips.map((tip, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-2xl text-center group transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                        >
                             {/* Animated Icon Background */}
                            <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full mb-6 relative overflow-hidden bg-white/20 transition-all duration-300 group-hover:scale-110">
                                <motion.div
                                    className="absolute inset-[-10px] bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)]"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                                {/* UPDATED: This div now becomes transparent on hover to reveal the gradient */}
                                <div className="relative z-10 w-[72px] h-[72px] bg-slate-800/50 rounded-full flex items-center justify-center text-white group-hover:bg-transparent transition-colors duration-300">
                                   <div className="relative z-20 w-full h-full flex items-center justify-center bg-transparent rounded-full">
                                      {tip.icon}
                                   </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                            <p className="text-white/80">{tip.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
export default TravelTips;