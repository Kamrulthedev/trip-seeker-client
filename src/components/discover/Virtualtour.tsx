/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
const virtualTourPoster = "https://images.unsplash.com/photo-1618751939022-835a23534bda?q=80&w=2070&auto=format&fit=crop";



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};


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


const Virtualtour = () => {
    return (
        <div className="relative py-20 h-[70vh] flex items-center justify-center text-center text-white">
            <img src={virtualTourPoster} className="absolute inset-0 w-full h-full object-cover" alt="Virtual tour poster" />
            <div className="absolute inset-0 bg-black/60"></div>
            <motion.div className="relative z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 className="text-4xl md:text-6xl font-extrabold mb-4" variants={itemVariants}>সന്ദর্শনের আগেই কক্সবাজারকে অনুভব করুন</motion.h2>
                <motion.button variants={itemVariants} className="group flex items-center justify-center mx-auto gap-3 text-2xl font-semibold hover:text-green-400 transition-colors">
                    <PlayCircle size={60} className="transition-transform group-hover:scale-110" />
                    <span>ভার্চুয়াল ট্যুর দেখুন</span>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Virtualtour;