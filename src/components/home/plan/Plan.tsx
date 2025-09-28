/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Map, PackageSearch, PhoneCall, Send, Smile, Heart } from 'lucide-react';

const backgroundImage = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto-format&fit=crop";

const containerVariants:any = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Main Plan Component
const Plan = () => {
    const steps = [
        { icon: <Map size={32} />, text: "আপনার পরিকল্পনা করুন" },
        { icon: <PackageSearch size={32} />, text: "প্যাকেজ বাছাই করুন" },
        { icon: <PhoneCall size={32} />, text: "যোগাযোগ করুন" },
        { icon: <Send size={32} />, text: "গন্তব্যে পৌঁছান" },
        { icon: <Smile size={32} />, text: "সার্ভিস উপভোগ করুন" },
        { icon: <Heart size={32} />, text: "স্মৃতি নিয়ে ফিরে যান" },
    ];

  return (
    <div className="relative bg-slate-100 py-14 sm:py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={backgroundImage} alt="Beautiful travel destination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <motion.div
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            variants={itemVariants}
          >
            <motion.span 
              className="bg-gradient-to-r p-2 from-blue-400 to-green-400 text-transparent bg-clip-text"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              আপনার ভ্রমণের পরিকল্পনা করুন
            </motion.span>
          </motion.h2>

          {/* Steps - Updated Grid Layout */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 items-start"
            variants={containerVariants} 
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <motion.button
                  className="relative flex items-center justify-center h-24 w-24 rounded-full border-2 border-white/30 text-white overflow-hidden"
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-[-10px] bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] z-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10 w-[90%] h-[90%] bg-black/30 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </motion.button>
                <h3 className="text-lg font-semibold text-white mt-4">{step.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Plan;