/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import expriences1 from "../../assets/images/discover/Experiences/Winner.jpg";
import expriences2 from "../../assets/images/discover/Experiences/key-bg.jpg";


// Mock Data in Bengali
const experiences = [
    { title: "সৈকতের কার্যকলাপ", description: "সূর্যস্নান, সাঁতার এবং ঘোড়ার পিঠে চড়ার আনন্দ নিন। কক্সবাজারের সোনালী বালিতে প্রতিটি মুহূর্ত উপভোগ করুন।", image: expriences1 },
    { title: "রিসোর্ট ও হোটেল", description: "আপনার বাজেট এবং পছন্দ অনুযায়ী সেরা থাকার জায়গা খুঁজুন। আমরা আন্তর্জাতিক মানের হোটেল এবং রিসোর্টের নিশ্চয়তা দিচ্ছি।", image: expriences2 },
    { title: "খাবার ও নাইটলাইফ", description: "স্থানীয় রেস্তোরাঁ এবং রাতের বাজারের অসাধারণ অভিজ্ঞতা নিন। এখানকার সামুদ্রিক খাবারের স্বাদ আপনার মনে থাকবে।", image: expriences1 },
    { title: "স্থানীয় সংস্কৃতি", description: "রাখাইনদের তৈরি হস্তশিল্প এবং ঐতিহ্যবাহী বাজার ঘুরে দেখুন। স্থানীয় মানুষের জীবনযাত্রার সাথে পরিচিত হন।", image: expriences2 },
];



// Reusable component for each experience item to create parallax effect
const ExperienceItem = ({ experience, imagePosition }: { experience: any, imagePosition: 'left' | 'right' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';
    const textOrder = imagePosition === 'left' ? 'lg:order-last' : 'lg:order-first';

    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Image Container with Parallax */}
            <div className={`overflow-hidden rounded-xl shadow-2xl ${imageOrder}`}>
                <motion.img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-[450px] object-cover"
                    style={{ y }}
                />
            </div>

            {/* Text Content */}
            <div className={`flex flex-col justify-center ${textOrder}`}>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{experience.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{experience.description}</p>
            </div>
        </motion.div>
    );
};

const Experiences = () => {
    return (
        <div className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl lg:text-5xl p-3">
                        অভিজ্ঞতাগুলো আবিষ্কার করুন
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        কক্সবাজারের প্রতিটি কোণায় লুকিয়ে থাকা অসাধারণ অভিজ্ঞতাগুলো আবিষ্কার করুন, যা আপনার ভ্রমণকে স্মরণীয় করে তুলবে।
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {experiences.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            experience={exp}
                            imagePosition={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiences;