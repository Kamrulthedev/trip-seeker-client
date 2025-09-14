import { motion } from 'framer-motion';


export const Map = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:text-5xl md:text-4xl p-3">আমাদের অফিসের ঠিকানা</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">আপনার যেকোনো প্রয়োজনে সরাসরি আমাদের অফিসে চলে আসুন।</p>
      </motion.div>
      <motion.div
        className="rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <iframe
          // UPDATED: Google Maps link for Cox's Bazar
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119223.72255755533!2d91.92342304313517!3d21.45103723321543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1724564895632!5m2!1sen!2sbd"
          className="w-full h-96 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};
