/* eslint-disable @typescript-eslint/no-explicit-any */
import about1 from "../assets/images/about/about11.jpg";
import about2 from "../assets/images/about/about2.jpg";
import Team from "../components/about/team/Team";
import { motion } from 'framer-motion';
import Testimonial from "../components/about/testimonial/Testimonial";
import PageCover from "../components/pageCover/PageCover";
import { Map } from "../components/about/map/Map";
import bgBanner from "../assets/images/about/about_banner.jpg";


// --- Framer Motion Variants ---
const itemVariants:any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


const AboutUs = () => {

  return (
    <div className="bg-slate-50">
      <PageCover title="আমাদের সম্পর্কে" image={bgBanner} />
      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.article
          variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-800">আমাদের গল্প</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6"></div>
          <div className="text-gray-600 text-justify space-y-4">
            <p>Trip Seeker-এর যাত্রা শুরু হয়েছিল কিছু ভ্রমণপিপাসু মানুষের স্বপ্ন থেকে। আমাদের লক্ষ্য ছিল বাংলাদেশের অসাধারণ সৌন্দর্যকে সারা বিশ্বের কাছে তুলে ধরা এবং ভ্রমণকারীদের জন্য একটি নির্ভরযোগ্য ও আরামদায়ক অভিজ্ঞতা নিশ্চিত করা।</p>
            <p>শুরু থেকে আজ পর্যন্ত, আমরা সততা এবং আন্তরিকতার সাথে আমাদের প্রতিটি ট্যুর আয়োজন করে আসছি। আমরা বিশ্বাস করি, ভ্রমণ শুধু নতুন জায়গা দেখা নয়, বরং নতুন অভিজ্ঞতা অর্জন এবং নিজেকে নতুনভাবে আবিষ্কার করা।</p>
          </div>
        </motion.article>
        <motion.div
          className="relative h-96"
          variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <img src={about1} className="w-full h-full object-cover rounded-xl shadow-lg" />
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative h-96 order-last md:order-first"
          variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <img src={about2} className="w-full h-full object-cover rounded-xl shadow-lg" />
        </motion.div>
        <motion.article
          variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-800">আমরা কারা?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6"></div>
          <div className="text-gray-600 text-justify space-y-4">
            <p>আমরা একদল অভিজ্ঞ এবং নিবেদিতপ্রাণ পেশাদার, যারা ভ্রমণকে ভালোবাসি এবং প্রতিটি ভ্রমণকারীর সন্তুষ্টিকেই আমাদের সর্বোচ্চ অগ্রাধিকার হিসেবে দেখি। আমাদের টিমে রয়েছে দক্ষ ট্যুর গাইড, অভিজ্ঞ অপারেশনস ম্যানেজার এবং বন্ধুত্বপূর্ণ কাস্টমার সাপোর্ট প্রতিনিধি।</p>
            <p>আমরা আপনার প্রতিটি ভ্রমণকে নিরাপদ, আনন্দদায়ক এবং স্মরণীয় করে তুলতে প্রতিশ্রুতিবদ্ধ। আপনার স্বপ্নের ভ্রমণকে বাস্তবে রূপ দেওয়াই আমাদের প্রধান লক্ষ্য।</p>
          </div>
        </motion.article>
      </section>

      <Team />
      <Testimonial />
      <Map />
    </div>
  );
};

export default AboutUs;
