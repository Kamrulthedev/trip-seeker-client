/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Framer Motion Variants ---
const menuVariants: any = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 25 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
};

const UserMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute top-full right-0 mt-3 w-64 bg-white rounded-lg shadow-2xl border border-slate-100"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Arrow Tip */}
                    <div className="absolute -top-2 right-5 w-4 h-4 bg-white transform rotate-45 border-l border-t border-slate-100"></div>

                    <div className="relative z-10 p-2">
                        <div className="p-2">
                            <h3 className="font-bold text-gray-800">স্বাগতম!</h3>
                            <p className="text-sm text-gray-500">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
                        </div>
                        <div className="w-full h-px bg-slate-100 my-2"></div>
                        <nav className="flex flex-col gap-1">
                            <Link to="/login" onClick={onClose} className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-slate-100 transition-colors">
                                <LogIn size={18} className="text-blue-500" />
                                <span>লগইন করুন</span>
                            </Link>
                            <Link to="/register" onClick={onClose} className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-slate-100 transition-colors">
                                <UserPlus size={18} className="text-green-500" />
                                <span>রেজিস্টার করুন</span>
                            </Link>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UserMenu;