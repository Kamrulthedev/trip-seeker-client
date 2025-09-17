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

export default AccordionItem;