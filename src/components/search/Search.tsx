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

const suggestionItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};


// --- Helper Component for Suggestion Cards ---
const SuggestionCard = ({ term, image, onSelect, onGoogleSearch }: any) => (
    <motion.div
        className="relative w-full sm:w-1/2 md:w-1/4 p-2"
        variants={suggestionItemVariants}
        whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
    >
        <div className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer" onClick={() => onSelect(term)}>
            <img src={image} alt={term} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-white font-bold text-lg truncate">{term}</h4>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onGoogleSearch(term);
                }}
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                title={`Search "${term}" on Google`}
            >
                {/* Simple Google Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.712,34.464,44,28.756,44,20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
            </button>
        </div>
    </motion.div>
);


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