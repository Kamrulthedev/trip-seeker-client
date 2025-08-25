/* eslint-disable @typescript-eslint/no-explicit-any */
import teammemberimage from "../../../assets/images/team/ourteam-1-1.jpg"
import { motion } from 'framer-motion';
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";


const teamMembers = [
  { name: 'আরিফুর রহমান', role: 'প্রতিষ্ঠাতা ও সিইও', image: teammemberimage },
  { name: 'সাদিয়া ইসলাম', role: 'হেড অফ অপারেশনস', image: teammemberimage },
  { name: 'মিজানুর চৌধুরী', role: 'সিনিয়র ট্যুর গাইড', image: teammemberimage },
];


// --- Framer Motion Variants ---
const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Team = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">আমাদের দক্ষ টিম</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">আমাদের একদল নিবেদিতপ্রাণ কর্মী, যারা আপনার ভ্রমণকে স্মরণীয় করে তুলতে সর্বদা প্রস্তুত।</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg text-center overflow-hidden group"
            variants={itemVariants}
          >
            <div className="relative h-64">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-300">{member.role}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600"><FaFacebook /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400"><CiTwitter /></a>
                <a href="#" className="text-gray-400 hover:text-blue-700"><CiLinkedin /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
