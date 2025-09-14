/* eslint-disable @typescript-eslint/no-explicit-any */
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import bgBanner from "../../assets/images/contact/contact-banner.jpg";
import PageCover from "../pageCover/PageCover";
import { motion } from 'framer-motion';
import { ContactCard } from "./ContactCard";
import Faq from "./Faq";



// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};


const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};



const Contact = () => {



  const contactDetails = [
    { icon: <MapPin size={24} />, title: "ঠিকানা", description: "কক্সবাজার, চট্টগ্রাম, বাংলাদেশ" },
    { icon: <Phone size={24} />, title: "ফোন", description: "+৮৮০ ১২৩৪ ৫৬৭৮৯০", href: "tel:+8801234567890" },
    { icon: <Mail size={24} />, title: "ইমেইল", description: "info@tripseeker.com", href: "mailto:info@tripseeker.com" },
    { icon: <Clock size={24} />, title: "অফিসের সময়", description: "শনি - বৃহস্পতি: সকাল ১০টা - সন্ধ্যা ৬টা" },
  ];



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
    e.currentTarget.reset();
  };





  return (
    <div className="bg-slate-50">
      <PageCover image={bgBanner} title="যোগাযোগ করুন" />
      <div className="container mx-auto py-20 px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column: Contact Info */}
          <motion.aside variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">যোগাযোগের তথ্য</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6"></div>
            <p className="text-gray-600 text-justify mb-8">
              আপনার ভ্রমণ পরিকল্পনা সম্পর্কে যেকোনো প্রশ্ন বা তথ্যের জন্য, আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না। আমাদের টিম আপনাকে সাহায্য করার জন্য সর্বদা প্রস্তুত।
            </p>
            <div>
              {contactDetails.map((detail, index) => (
                <ContactCard key={index} {...detail} />
              ))}
            </div>
          </motion.aside>

          {/* Right Column: Contact Form */}
          <motion.aside
            className="bg-white p-8 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-2 text-gray-800">বার্তা পাঠান</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6"></div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" placeholder="আপনার নাম" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                <input type="email" placeholder="আপনার ইমেইল" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
              </div>
              <input type="text" placeholder="বিষয়" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
              <textarea placeholder="আপনার বার্তা লিখুন..." required rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"></textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                বার্তা পাঠান
              </motion.button>
            </form>
          </motion.aside>
        </motion.div>
      </div>
      <Faq />
    </div>
  );
};

export default Contact;
