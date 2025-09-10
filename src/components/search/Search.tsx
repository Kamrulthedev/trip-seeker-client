/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { useState } from 'react';

// --- Framer Motion Variants ---
const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const contentVariants: any = {
    hidden: { y: '-20%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 0.1 } },
    exit: { y: '-20%', opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const suggestionsVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};



const Search = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const popularSearches = [
        { name: "কক্সবাজার", image: "https://images.unsplash.com/photo-1588253969500-3075a331dfa9?q=80&w=400" },
        { name: "সেন্ট মার্টিন", image: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?q=80&w=400" },
        { name: "সাজেক", image: "https://images.unsplash.com/photo-1618049339391-48b18aa2b929?q=80&w=400" },
        { name: "বান্দরবান", image: "https://images.unsplash.com/photo-1605915492168-de86a42b1154?q=80&w=400" },
    ];
    
    const handleGoogleSearch = (term: string) => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(term)}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-white/30 backdrop-blur-xl flex flex-col items-center p-4 sm:p-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-4xl"
                        variants={contentVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="relative mt-12">
                            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                            <input
                                type="text"
                                placeholder="আপনার পছন্দের জায়গা খুঁজুন..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                className="w-full pl-16 pr-6 py-5 bg-white text-lg text-gray-800 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </motion.div>

                    {/* Popular Searches */}
                    <motion.div
                        className="mt-10 w-full max-w-4xl"
                        variants={suggestionsVariants}
                    >
                        <h3 className="text-center text-lg font-semibold text-gray-700 mb-4">জনপ্রিয় সার্চ</h3>
                        <div className="flex flex-wrap -m-2">
                            {popularSearches.map((item) => (
                                <SuggestionCard 
                                    key={item.name}
                                    term={item.name}
                                    image={item.image}
                                    onSelect={setSearchQuery}
                                    onGoogleSearch={handleGoogleSearch}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Close Button */}
                    <motion.button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/50 hover:bg-white transition-colors"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { delay: 0.4 } }}
                        exit={{ scale: 0, opacity: 0 }}
                    >
                        <X className="text-gray-700" size={24} />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Search;