/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import expriences1 from "../../../assets/images/discover/Experiences/Winner.jpg";
import expriences2 from "../../../assets/images/discover/Experiences/key-bg.jpg";
import ExperienceItem from './ExperienceItem';


const experiences = [
    { title: "সৈকতের কার্যকলাপ", description: "সূর্যস্নান, সাঁতার এবং ঘোড়ার পিঠে চড়ার আনন্দ নিন। কক্সবাজারের সোনালী বালিতে প্রতিটি মুহূর্ত উপভোগ করুন।", image: expriences1 },
    { title: "রিসোর্ট ও হোটেল", description: "আপনার বাজেট এবং পছন্দ অনুযায়ী সেরা থাকার জায়গা খুঁজুন। আমরা আন্তর্জাতিক মানের হোটেল এবং রিসোর্টের নিশ্চয়তা দিচ্ছি।", image: expriences2 },
    { title: "খাবার ও নাইটলাইফ", description: "স্থানীয় রেস্তোরাঁ এবং রাতের বাজারের অসাধারণ অভিজ্ঞতা নিন। এখানকার সামুদ্রিক খাবারের স্বাদ আপনার মনে থাকবে।", image: expriences1 },
    { title: "স্থানীয় সংস্কৃতি", description: "রাখাইনদের তৈরি হস্তশিল্প এবং ঐতিহ্যবাহী বাজার ঘুরে দেখুন। স্থানীয় মানুষের জীবনযাত্রার সাথে পরিচিত হন।", image: expriences2 },
];




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