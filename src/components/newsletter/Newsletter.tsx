/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const backgroundImage = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto-format&fit=crop";

const containerVariants: any = {
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

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    alert(`ধন্যবাদ! ${email} ঠিকানায় আমাদের নিউজলেটার পাঠানো হবে।`);
    e.currentTarget.reset();
  };

  return (
    <section className="relative py-20 sm:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={backgroundImage} alt="Workspace background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
          variants={itemVariants}
        >
          <Mail className="text-white h-8 w-8" />
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md"
          variants={itemVariants}
        >
          আমাদের নিউজলেটারে সাইন আপ করুন
        </motion.h2>

        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-200 drop-shadow-sm"
          variants={itemVariants}
        >
          সর্বশেষ আপডেট এবং আকর্ষণীয় অফার পেতে আমাদের সাপ্তাহিক নিউজলেটারে সাবস্ক্রাইব করুন।
        </motion.p>

        <motion.form 
          className="mt-8 max-w-lg mx-auto"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row items-center bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30 shadow-lg">
            <input
              type="email"
              name="email"
              required
              placeholder="আপনার ইমেইল দিন..."
              className="w-full sm:w-2/3 bg-transparent text-white placeholder-slate-300 outline-none h-12 px-5"
            />
            <motion.button 
              type="submit"
              className="w-full sm:w-1/3 h-12 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg mt-2 sm:mt-0 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              সাবস্ক্রাইব
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Newsletter;