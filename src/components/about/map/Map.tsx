import { motion } from 'framer-motion';



export const Map = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">আমাদের অফিসের ঠিকানা</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">আপনার যেকোনো প্রয়োজনে সরাসরি আমাদের অফিসে চলে আসুন।</p>
      </motion.div>
      <motion.div
        className="rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.892699687015!2d90.3881699154247!3d23.75122139467479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e3624946!2sBashundhara%20City!5e0!3m2!1sen!2sbd!4v1678886456789!5m2!1sen!2sbd"
          className="w-full h-96 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};