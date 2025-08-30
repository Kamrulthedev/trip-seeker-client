import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
/* eslint-disable @typescript-eslint/no-explicit-any */


const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0, transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};



const TravelTips = () => {
    const tips = [
        { title: "সেরা সময়", description: "অক্টোবর থেকে মার্চ মাস কক্সবাজার ভ্রমণের জন্য সবচেয়ে উপযুক্ত সময়।" },
        { title: "নিরাপত্তা", description: "সর্বদা নির্ধারিত জোনে সাঁতার কাটুন এবং লাইফগার্ডের নির্দেশনা মেনে চলুন।" },
        { title: "দর কষাকষি", description: "স্থানীয় বাজার বা পরিবহনে কেনাকাটার আগে ভালোভাবে দর কষাকষি করে নিন।" },
    ];

    return (
         <div className="bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-12" initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">ভ্রমণ টিপস</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tips.map((tip, index) => (
                        <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
                            <Lightbulb className="w-12 h-12 text-green-500 mt-1"/>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{tip.title}</h3>
                                <p className="text-gray-600">{tip.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TravelTips;