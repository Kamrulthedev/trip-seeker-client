/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";



const itemVariants:any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0, transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};




const Experiences = () => {
    const experiences = [
        { title: "সৈকতের কার্যকলাপ", description: "সূর্যস্নান, সাঁতার এবং ঘোড়ার পিঠে চড়ার আনন্দ নিন।", image: "https://images.unsplash.com/photo-1610022365394-c08c4a4c4f39?q=80&w=1974&auto=format&fit=crop" },
        { title: "রিসোর্ট ও হোটেল", description: "আপনার বাজেট এবং পছন্দ অনুযায়ী সেরা থাকার জায়গা খুঁজুন।", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" },
        { title: "খাবার ও নাইটলাইফ", description: "স্থানীয় রেস্তোরাঁ এবং রাতের বাজারের অসাধারণ অভিজ্ঞতা।", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" },
        { title: "স্থানীয় সংস্কৃতি", description: "রাখাইনদের তৈরি হস্তশিল্প এবং ঐতিহ্যবাহী বাজার ঘুরে দেখুন।", image: "https://images.unsplash.com/photo-1528110215254-159b36488b65?q=80&w=1964&auto=format&fit=crop" },
    ];
    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-12" initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl">অভিজ্ঞতাগুলো আবিষ্কার করুন</h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div key={index} className="relative h-96 rounded-xl overflow-hidden group cursor-pointer" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
                            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                    <p className="text-white/80 mt-2">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiences;