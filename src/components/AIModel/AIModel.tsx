/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GetAIResponse from "./GetAIResponse";



const AIModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // scroll this function when messages change
    useEffect(scrollToBottom, [messages]);

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');

        setTimeout(() => {
            const botResponse = {
                sender: 'ai',
                text: GetAIResponse(input)
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1500);
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed bottom-20 right-6 z-[99] w-11/12 max-w-sm transform rounded-3xl bg-white/80 p-1 shadow-2xl backdrop-blur-md"
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex h-[70vh] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white">
                        {/* model hedar */}
                        <div className="flex items-center justify-between border-b bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white shadow-sm">
                            <h2 className="text-lg font-bold">AI ট্র্যাভেল গাইড</h2>
                            <button onClick={onClose} className="p-1 text-white opacity-80 transition-opacity hover:opacity-100">
                                <X size={24} />
                            </button>
                        </div>

                        {/* chat body */}
                        <div className="flex-grow space-y-4 overflow-y-auto p-4">
                            <div className="flex items-start gap-2">
                                <MessageCircle size={32} className="flex-shrink-0 text-green-500" />
                                <motion.div
                                    className="max-w-xs rounded-2xl bg-green-100 p-3 text-sm text-green-800"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
                                >
                                    <p>হ্যালো, আমি আপনার AI ট্র্যাভেল গাইড। বাংলাদেশের পর্যটন সম্পর্কে কোনো প্রশ্ন থাকলে আমাকে জিজ্ঞাসা করতে পারেন।</p>
                                </motion.div>
                            </div>

                            {messages.map((msg, index) => (
                                <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <AnimatePresence>
                                        {msg.sender === 'ai' && (
                                            <MessageCircle size={32} className="flex-shrink-0 text-green-500" />
                                        )}
                                    </AnimatePresence>
                                    <motion.div
                                        className={`${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-green-100 text-green-800'} max-w-xs rounded-2xl p-3 text-sm`}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
                                    >
                                        <p>{msg.text}</p>
                                    </motion.div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* input area */}
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2 border-t p-4">
                            <textarea
                                className="flex-grow resize-none rounded-full border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={1}
                                placeholder="আপনার প্রশ্ন লিখুন..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        handleSendMessage(e);
                                    }
                                }}
                            ></textarea>
                            <button
                                type="submit"
                                className="rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-3 text-white transition-all duration-200 hover:scale-110 disabled:scale-100 disabled:from-gray-400 disabled:to-gray-500"
                                disabled={!input.trim()}
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AIModal;