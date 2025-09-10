/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';

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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
};

const Search = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const popularSearches = ["কক্সবাজার", "সেন্ট মার্টিন", "সাজেক", "বান্দরবান"];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-white/30 backdrop-blur-xl flex items-start justify-center p-4 sm:p-6 md:p-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-2xl"
                        variants={contentVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search Input */}
                        <div className="relative">
                            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                            <input
                                type="text"
                                placeholder="আপনার পছন্দের জায়গা খুঁজুন..."
                                autoFocus
                                className="w-full pl-16 pr-6 py-5 bg-white text-lg text-gray-800 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Popular Searches */}
                        <motion.div
                            className="mt-6 flex flex-wrap items-center justify-center gap-3"
                            variants={suggestionsVariants}
                        >
                            <span className="text-sm font-semibold text-gray-600">জনপ্রিয় সার্চ:</span>
                            {popularSearches.map((term) => (
                                <motion.button
                                    key={term}
                                    className="px-4 py-2 bg-slate-100 text-gray-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                                    variants={suggestionItemVariants}
                                >
                                    {term}
                                </motion.button>
                            ))}
                        </motion.div>
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