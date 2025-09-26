/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";



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
                text: getAIResponse(input)
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1500);
    };


    // Simple Ai response logic
    const getAIResponse = (userText: string) => {
        const text = userText.toLowerCase();

        // অভিবাদন
        if (text.includes("hi") || text.includes("hello") || text.includes("হাই") || text.includes("হ্যালো") || text.includes("সালাম")) {
            return "হ্যালো! 😊 আমি আপনার AI ট্র্যাভেল গাইড। আপনি যেকোনো ভ্রমণ সম্পর্কিত প্রশ্ন করতে পারেন।";
        }

        // ওয়েবসাইট সম্পর্কিত
        else if (text.includes("ওয়েবসাইট") || text.includes("আপনার ওয়েবসাইট") || text.includes("কে তৈরি করেছে") || text.includes("website")) {
            return "আমাদের ওয়েবসাইটটি তৈরি করা হয়েছে বাংলাদেশের পর্যটন কেন্দ্রগুলি সম্পর্কে বিস্তারিত তথ্য, ভ্রমণ টিপস এবং গাইডলাইন প্রদান করার জন্য।";
        }

        // ওয়েবসাইটের কাজ
        else if (text.includes("কাজ কি") || text.includes("ওয়েবসাইটের কাজ")) {
            return "এই ওয়েবসাইটের মূল কাজ হলো পর্যটন স্থান, হোটেল, যাতায়াত ও ভ্রমণ সংক্রান্ত তথ্য প্রদান করা। যাতে ভ্রমণকারীরা সহজেই ভ্রমণ পরিকল্পনা করতে পারেন।";
        }

        // সার্ভিসেস
        else if (text.includes("service") || text.includes("services") || text.includes("সার্ভিস") || text.includes("সার্ভিসেস")) {
            return `আমাদের সার্ভিসের মধ্যে রয়েছে ভ্রমণ গাইড, হোটেল বুকিং ইনফো, যাতায়াত নির্দেশনা, এবং ট্রাভেল টিপস। বিস্তারিত জানতে ভিজিট করুন: 👉 <a href="https://trip-seeker-bd.vercel.app/services" target="_blank" class="text-blue-500 hover:underline">আমাদের সার্ভিসেস</a>`;
        }

        // কক্সবাজার
        else if (text.includes("কক্সবাজার") || text.includes("cox`s bazar") || text.includes("coxs bazar")) {
            return "কক্সবাজারের সমুদ্র সৈকত বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত। সেখানে আপনি সূর্যাস্ত দেখতে পারেন, ইনানী বীচে যেতে পারেন এবং হিমছড়ির ঝরনা উপভোগ করতে পারেন।";
        }
        else if (text.includes("কক্সবাজারের হোটেল") || text.includes("হোটেল") || text.includes("হোটেলের")) {
            return "কক্সবাজারের বিভিন্ন মানের অসংখ্য হোটেল ও রিসোর্ট রয়েছে। হোটেল বুকিং এর জন্য আপনি বিভিন্ন অনলাইন প্ল্যাটফর্ম যেমন Booking.com, Agoda বা GoZayaan ব্যবহার করতে পারেন।";
        }
        else if (text.includes("কক্সবাজারে কখন যাবো") || text.includes("সেরা সময়")) {
            return "কক্সবাজার ভ্রমণের সেরা সময় হলো অক্টোবর থেকে মার্চ মাস পর্যন্ত। এই সময়ে আবহাওয়া ঠাণ্ডা ও মনোরম থাকে।";
        }
        else if (text.includes("কক্সবাজার কিভাবে যাবো") || text.includes("কক্সবাজারের যাতায়াত") || text.includes("যাতায়াত ব্যবস্থা")) {
            return "ঢাকা থেকে কক্সবাজার সড়ক, রেল এবং আকাশপথে যাওয়া যায়। বাসে করে যেতে সাধারণত ৯-১২ ঘন্টা সময় লাগে, আর বিমানে মাত্র ১ ঘন্টা।";
        }
        // কক্সবাজার সম্পর্কিত নতুন তথ্য
        else if (text.includes("কক্সবাজারের দর্শনীয় স্থান") || text.includes("ঘুরার জায়গা") || text.includes("দর্শনীয় স্থান")) {
            return "কক্সবাজারে দেখার মতো অনেক জায়গা আছে। এর মধ্যে উল্লেখযোগ্য হলো ইনানী বিচ, হিমছড়ি ঝরনা ও পাহাড়, সেন্ট মার্টিন দ্বীপ (নৌপথে), মেরিন ড্রাইভ এবং সোনাদিয়া দ্বীপ।";
        }
        else if (text.includes("কক্সবাজারের খাবার") || text.includes("খাবারের ভালো জায়গা") || text.includes("ভালো রেস্তোরাঁ")) {
            return "কক্সবাজারে সামুদ্রিক খাবার খুবই জনপ্রিয়। আপনি বিভিন্ন রেস্তোরাঁ যেমন নিরভানা ইন রেস্তোরাঁ, কফি হাউজ, বা সি-বীচ রেস্তোরাঁতে ভালো মানের খাবার পাবেন।";
        }
        else if (text.includes("কক্সবাজারের শপিং") || text.includes("শপিং করার জায়গা")) {
            return "কক্সবাজারের বার্মিজ মার্কেট শপিংয়ের জন্য দারুণ একটি জায়গা। এখানে আপনি বার্মিজ আচার, হাতে তৈরি জিনিসপত্র এবং নানা ধরনের উপহার সামগ্রী পাবেন।";
        }

        // অন্যান্য স্থান
        else if (text.includes("সেন্ট মার্টিন")) {
            return "সেন্ট মার্টিন বাংলাদেশের একমাত্র প্রবাল দ্বীপ। সেখানে যেতে হলে আপনাকে টেকনাফ থেকে জাহাজে করে যেতে হবে। এটি নারকেল বাগান এবং স্ফটিক স্বচ্ছ জলের জন্য বিখ্যাত।";
        }
        else if (text.includes("সুন্দরবন")) {
            return "সুন্দরবন বিশ্বের বৃহত্তম ম্যানগ্রোভ বন, যা রয়েল বেঙ্গল টাইগার এবং অন্যান্য বন্যপ্রাণীর আবাসস্থল। এখানে নৌকায় করে ঘোরার অভিজ্ঞতা অসাধারণ।";
        }

        // যোগাযোগ
        else if (text.includes("contact number") || text.includes("contact no") || text.includes("contact") || text.includes("number") || text.includes("phone") || text.includes("phone number") || text.includes("মোবাইল নাম্বার")) {
            return "আমাদের হেল্পলাইন নাম্বার 01827754168। আপনি আমাদের এই নাম্বারে যেকোনো সময় যোগাযোগ করতে পারেন। ধন্যবাদ।";
        }

        // ধন্যবাদ
        else if (text.includes("ধন্যবাদ") || text.includes("thanks") || text.includes("thank you")) {
            return "আপনাকে ধন্যবাদ! 🙏 আশা করি আপনার ভ্রমণ সুন্দর ও আনন্দদায়ক হবে।";
        }

        // লোকেশন সম্পর্কিত (গুগল সার্চ লিঙ্ক সহ)
        else if (text.includes("ঢাকা") || text.includes("সিলেট") || text.includes("খুলনা") || text.includes("রাজশাহী") || text.includes("চট্টগ্রাম") || text.includes("বান্দরবান") || text.includes("রাঙ্গামাটি") || text.includes("কুমিল্লা")) {
            return `আপনি "${userText}" সম্পর্কে আরও জানতে চাইলে এখানে ক্লিক করুন: 🔎 <a href="https://www.google.com/search?q=${encodeURIComponent(userText)}" target="_blank" class="mt-2 inline-block rounded-full bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600">গুগল সার্চ করুন</a>`;
        }

        // সাধারণ ফলব্যাক
        else {
            return "আমি আপনার প্রশ্নের উত্তর দিতে পারছি না। আমাকে কোনো ভ্রমণ স্থান এর নাম বলুন, আমি সেই জায়গা সম্পর্কে আপডেট দিচ্ছি।";
        }
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
                        {/* মডেল হেডার */}
                        <div className="flex items-center justify-between border-b bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white shadow-sm">
                            <h2 className="text-lg font-bold">AI ট্র্যাভেল গাইড</h2>
                            <button onClick={onClose} className="p-1 text-white opacity-80 transition-opacity hover:opacity-100">
                                <X size={24} />
                            </button>
                        </div>

                        {/* চ্যাট বডি */}
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

                        {/* ইনপুট এরিয়া */}
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