/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import {  Award } from 'lucide-react';
import winners from "../../../assets/Winners-new.jpg";
import { BtnPrimary } from '../../ui/BtnPrimary';
import { Link } from 'react-router-dom';


const containerVariants: any = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Winners = () => {
    return (
        <div className="bg-slate-50 p-4 sm:py-14 md:py-16 lg:mb-4 my-16 lg:my-2">
            <motion.div
                className="relative container mx-auto rounded-2xl shadow-2xl overflow-hidden group h-[60vh] md:h-[70vh]"
                style={{ transformStyle: 'preserve-3d' }}
                variants={containerVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* 3D Tilt Effect Container */}
                <motion.div
                    className="absolute inset-0"
                    whileHover={{
                        rotateX: 5,
                        rotateY: -5,
                        // UPDATED: Changed transition for a smoother effect
                        transition: { ease: "circOut", duration: 0.6 },
                    }}
                >
                    {/* Background Image */}
                    <img
                        src={winners}
                        alt="Happy travelers at a tourist destination"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                    {/* Award Badge with Motion Gradient */}
                    <motion.div
                        className="absolute top-6 right-6 p-3 rounded-full shadow-lg overflow-hidden"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="absolute inset-[-10px] bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-sm"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative z-10 flex flex-col items-center text-white bg-black/30 p-2 rounded-full">
                           <Award size={28} />
                           <span className="font-bold text-lg">2025</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="p-8 md:p-16 max-w-2xl">
                            <motion.h1
                                className="text-4xl p-3 md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 drop-shadow-md lg:text-start text-center"
                                variants={itemVariants}
                            >
                                বিশ্বের সেরা ভ্রমণ অভিজ্ঞতা
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-lg md:text-xl text-slate-200 drop-shadow-sm lg:text-start text-center"
                                variants={itemVariants}
                            >
                                ২০২৫ সালের সেরা ভ্রমণ অ্যাওয়ার্ড বিজয়ীদের সাথে আপনার পরবর্তী ভ্রমণকে স্মরণীয় করে তুলুন।
                            </motion.p>
                            <motion.div variants={itemVariants} className='flex lg:justify-start justify-center space-y-4 mt-3'>
                                <Link to="/tours">
                                    <BtnPrimary text="বিজয়ীদের দেখুন" title="বিজয়ীদের দেখুন" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Winners;