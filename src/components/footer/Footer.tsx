/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

import Logo from '../header/Nav/Logo';
import payCopyrightUrl from '../../assets/images/pay_copyright.png';

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

// --- Helper Component for Footer Links with a new hover effect ---
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-gray-500 hover:text-green-600 transition-colors duration-300 group inline-flex items-center gap-2">
    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"/>
    <span>{children}</span>
  </Link>
);

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61579613402394" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-white border-t">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Section of Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          
          {/* Column 1: Logo, Contact and Socials */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Logo />
            <p className="text-gray-500">আপনার স্বপ্নের ভ্রমণকে বাস্তবে রূপ দিতে আমরা আছি আপনার পাশে।</p>
            {/* Contact Info */}
            <div className="space-y-3 text-gray-500">
                <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-blue-500"/>
                    <span>কক্সবাজার, চট্টগ্রাম, বাংলাদেশ</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone size={18} className="text-blue-500"/>
                    <span>01827754168</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-500"/>
                    <span>tripseekerbd@gmail.com</span>
                </div>
            </div>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="w-9 h-9 flex items-center justify-center bg-slate-100 rounded-full text-gray-600 transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-green-500 hover:text-white hover:scale-110">
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: About Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800">আমাদের সম্পর্কে</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mt-2 mb-6"></div>
            <div className="space-y-3 flex flex-col items-start">
              <FooterLink to="/about">আমাদের গল্প</FooterLink>
              <FooterLink to="/careers">ক্যারিয়ার</FooterLink>
              <FooterLink to="/privacy-policy">গোপনীয়তা নীতি</FooterLink>
              <FooterLink to="/terms">ব্যবহারের শর্তাবলী</FooterLink>
            </div>
          </motion.div>

          {/* Column 3: Popular Destinations */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800">জনপ্রিয় গন্তব্য</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mt-2 mb-6"></div>
            <div className="space-y-3 flex flex-col items-start">
              <FooterLink to="/tours/coxs-bazar">কক্সবাজার সমুদ্রসৈকত</FooterLink>
              <FooterLink to="/tours/saint-martin">পাটুয়ারটেক সৈকত</FooterLink>
              <FooterLink to="/tours/bandarban">কলাতলী পয়েন্ট</FooterLink>
              <FooterLink to="/tours/sajek">ইনানি বিচ</FooterLink>
              <FooterLink to="/tours/marindrive">মেরিন ড্রাইভ রোড</FooterLink>
              <FooterLink to="/tours/himchodi">হিমছড়ি</FooterLink>
            </div>
          </motion.div>

          {/* Column 4: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800">দ্রুত লিঙ্ক</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mt-2 mb-6"></div>
            <div className="space-y-3 flex flex-col items-start">
              <FooterLink to="/contact">যোগাযোগ</FooterLink>
              <FooterLink to="/support">সাপোর্ট</FooterLink>
              <FooterLink to="/faq">সাধারণ জিজ্ঞাসা</FooterLink>
              <FooterLink to="/blog">আমাদের ব্লগ</FooterLink>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section of Footer */}
        <div className="border-t py-6 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} <Link to={"/"}>Trip Seeker</Link> | সর্বস্বত্ব সংরক্ষিত | Created By <Link to={'https://kamrul-hassan-org.vercel.app/'}>Kamrul Hassan</Link>
          </p>
          <img src={payCopyrightUrl} alt="Payment Methods" className="h-8" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;