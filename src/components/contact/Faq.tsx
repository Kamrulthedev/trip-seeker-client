/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from "react";

const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};


// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

// Component 3: FAQ Section (New Section)
const faqs = [
    { question: "কিভাবে একটি ট্যুর প্যাকেজ বুক করব?", answer: "আপনি আমাদের ওয়েবসাইটের 'সার্ভিসসমূহ' পেজ থেকে আপনার পছন্দের প্যাকেজটি বেছে নিয়ে 'বুক করুন' বাটনে ক্লিক করে সহজেই বুক করতে পারেন। এছাড়াও, আপনি সরাসরি আমাদের ফোন নম্বরে কল করেও বুকিং সম্পন্ন করতে পারেন।" },
    { question: "পেমেন্ট করার পদ্ধতিগুলো কি কি?", answer: "আমরা বিকাশ, নগদ, রকেট এবং সকল প্রধান ব্যাংকের কার্ডের মাধ্যমে পেমেন্ট গ্রহণ করে থাকি। আপনার সুবিধামতো যেকোনো একটি পদ্ধতি বেছে নিতে পারেন।" },
    { question: "আমি কি আমার বুকিং বাতিল করতে পারি?", answer: "হ্যাঁ, আপনি আপনার বুকিং বাতিল করতে পারেন। আমাদের 'রিফান্ড পলিসি' অনুযায়ী, ভ্রমণের নির্দিষ্ট সময় আগে বাতিল করলে আপনি আংশিক বা সম্পূর্ণ রিফান্ড পেতে পারেন। বিস্তারিত জানতে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।" },
    { question: "আপনাদের কি কাস্টমাইজড ট্যুর প্যাকেজের ব্যবস্থা আছে?", answer: "অবশ্যই! আমরা আপনার প্রয়োজন অনুযায়ী কাস্টমাইজড ট্যুর প্যাকেজ তৈরি করে থাকি। আপনার গ্রুপ সাইজ, বাজেট এবং পছন্দের স্থান অনুযায়ী আমরা সেরা প্যাকেজটি ডিজাইন করে দেব।" },
];





const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div className="border-b" variants={itemVariants}>
            <button
                className="w-full flex justify-between items-center text-left py-5 font-semibold text-lg text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                {isOpen ? <Minus className="text-green-500" /> : <Plus className="text-blue-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-gray-600">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};




const Faq = () => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-4xl p-3">সাধারণ জিজ্ঞাসা</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">আপনার মনে থাকা প্রশ্নগুলোর উত্তর খুঁজে নিন।</p>
                </motion.div>
                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Faq;