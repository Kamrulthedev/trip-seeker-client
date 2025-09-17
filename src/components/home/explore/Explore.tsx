/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import mainImageUrl from "../../../assets/images/explore/explore1.jpg";
import mainImageUrl1 from "../../../assets/images/explore/explore3.jpg";
import { motion } from 'framer-motion';
import { BtnPrimary } from '../../ui/BtnPrimary';


const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const imageContainerVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};


const Explore = () => {
    return (
        <section className="bg-slate-100 font-sans overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.article className="flex flex-col lg:items-start text-center lg:text-left order-2 lg:order-1">
                        <motion.h1
                            className="text-3xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl md:text-5xl lg:text-start text-center"
                            variants={itemVariants}
                        >
                            কক্সবাজারের সৈকত ও পাহাড়
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                                ভ্রমণে নতুন অভিজ্ঞতা
                            </span>
                        </motion.h1>
                        <motion.p
                            className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg leading-8 text-gray-600"
                            variants={itemVariants}
                        >
                            কক্সবাজারের শান্ত সমুদ্রসৈকত থেকে শুরু করে সবুজ পাহাড় আর দ্বীপজুড়ে
                            ভ্রমণ — আমরা আপনার জন্য ম্যানেজ করব থাকা, খাওয়া ও নিরাপদ ভ্রমণের সবকিছু।
                            পরিবার, বন্ধু কিংবা কাপল — সবার জন্য আমাদের রয়েছে বিশেষ প্যাকেজ।
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="mt-10 w-full flex justify-center lg:justify-start"
                        >
                            <Link to="/tours">
                                <BtnPrimary text="প্যাকেজ দেখুন" title="প্যাকেজ দেখুন" />
                            </Link>
                        </motion.div>
                    </motion.article>


                    <motion.article
                        className="relative w-full max-w-lg mx-auto lg:max-w-none h-[400px] sm:h-[500px] order-1 lg:order-2"
                        variants={imageContainerVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-3xl transform -rotate-6"></div>
                        <img
                            src={mainImageUrl}
                            alt="Cox's Bazar, Bangladesh"
                            className="absolute w-[85%] h-[85%] top-0 left-0 rounded-2xl object-cover shadow-2xl"
                        />
                        <img
                            src={mainImageUrl1}
                            alt="Tea Gardens in Sreemangal, Bangladesh"
                            className="absolute w-[60%] h-[60%] bottom-0 right-0 rounded-2xl object-cover shadow-2xl border-4 border-white"
                        />
                    </motion.article>
                </motion.div>
            </div>
        </section>
    );
};


export default Explore;