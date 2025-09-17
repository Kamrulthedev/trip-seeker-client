/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowUp, MessageCircle, Send, X } from "lucide-react";

// Scroll to top button - (as per user request, this is fine)
const ScrollToTopButton = ({ onClick, title }: { onClick: () => void; title: string }) => {
    return (
        <motion.button
            className="relative overflow-hidden font-sans font-bold
            cursor-pointer border rounded-full
            flex items-center justify-center group
            w-14 h-14 shadow-lg border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            title={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="absolute inset-[-10px] rounded-full bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-md z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 w-[90%] h-[90%] flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full">
                <ArrowUp className="text-white h-6 w-6" />
            </div>
        </motion.button>
    );
};


// AI Modal (New, smarter design with simulated AI chat)
const AIModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            const botResponse = {
                sender: 'ai',
                text: getAIResponse(input)
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1500);
    };

    const getAIResponse = (userText: string) => {
        const text = userText.toLowerCase();
        if (text.includes("কক্সবাজার")) {
            return "কক্সবাজারের সমুদ্র সৈকত বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত। সেখানে আপনি সূর্যাস্ত দেখতে পারেন, ইনানী বীচে যেতে পারেন এবং হিমছড়ির ঝরনা উপভোগ করতে পারেন।";
        } else if (text.includes("সেন্ট মার্টিন")) {
            return "সেন্ট মার্টিন বাংলাদেশের একমাত্র প্রবাল দ্বীপ। সেখানে যেতে হলে আপনাকে টেকনাফ থেকে জাহাজে করে যেতে হবে। এটি নারকেল বাগান এবং স্ফটিক স্বচ্ছ জলের জন্য বিখ্যাত।";
        } else if (text.includes("সুন্দরবন")) {
            return "সুন্দরবন বিশ্বের বৃহত্তম ম্যানগ্রোভ বন, যা রয়েল বেঙ্গল টাইগার এবং অন্যান্য বন্যপ্রাণীর আবাসস্থল। এখানে নৌকায় করে ঘোরার অভিজ্ঞতা অসাধারণ।";
        } else {
            return "আমি আপনার প্রশ্নের উত্তর দিতে পারছি না। অনুগ্রহ করে পর্যটন সম্পর্কিত অন্য কোনো প্রশ্ন করুন।";
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[99] flex items-center justify-center bg-black/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-2xl flex flex-col w-full max-w-md h-[80vh] backdrop-blur-sm"
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-bold text-gray-800">এআই ট্র্যাভেল গাইড</h2>
                            <button onClick={onClose} className="p-1 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        
                        {/* Chat Body */}
                        <div className="flex-grow p-4 overflow-y-auto space-y-4">
                            <div className="flex items-start gap-2">
                                <MessageCircle size={32} className="text-blue-500 flex-shrink-0" />
                                <div className="bg-gray-100 p-3 rounded-lg max-w-xs text-sm">
                                    <p>হ্যালো, আমি আপনার এআই ট্র্যাভেল গাইড। বাংলাদেশের পর্যটন সম্পর্কে কোনো প্রশ্ন থাকলে আমাকে জিজ্ঞাসা করতে পারেন।</p>
                                </div>
                            </div>
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2`}>
                                    {msg.sender === 'ai' && <MessageCircle size={32} className="text-blue-500 flex-shrink-0" />}
                                    <div className={`${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} p-3 rounded-lg max-w-xs text-sm`}>
                                        <p>{msg.text}</p>
                                    </div>
                                    {msg.sender === 'user' && <span className="p-2 rounded-full bg-blue-500 flex-shrink-0"><MessageCircle size={16} className="text-white" /></span>}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center gap-2">
                            <textarea
                                className="flex-grow p-2 border rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={1}
                                placeholder="আপনার প্রশ্ন লিখুন..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { handleSendMessage(e); } }}
                            ></textarea>
                            <button
                                type="submit"
                                className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:bg-gray-400"
                                disabled={!input.trim()}
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Main Layout Component
const MainLayout = () => {
    const location = useLocation();
    const [showButton, setShowButton] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <Header />
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Newsletter />
            <Footer />
            {showButton && (
                <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
                    <ScrollToTopButton title="Scroll to top" onClick={scrollToTop} />
                    <AIGuideButton title="এআই ট্র্যাভেল গাইড" onClick={toggleModal} />
                </div>
            )}
            <AIModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default MainLayout;