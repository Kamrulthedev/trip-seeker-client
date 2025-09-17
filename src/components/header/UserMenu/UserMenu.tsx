/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus } from 'lucide-react';
import { MenuButton } from '../../ui/BtnPrimary';

const menuVariants: any = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 30 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};



const UserMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute top-full right-0 mt-3 w-64 rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-white/30 backdrop-blur-xl"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="absolute -top-2 right-5 w-4 h-4 bg-white/30 backdrop-blur-xl transform rotate-45 border-l border-t border-white/20"></div>

                    <div className="relative z-10 p-3">
                        <div className="text-center p-2">
                            <h3 className="font-bold text-lg text-slate-800">স্বাগতম!</h3>
                            <p className="text-sm text-slate-600 mt-1">আপনার ভ্রমণকে আরও সহজ করতে লগইন করুন</p>
                        </div>
                        
                        <div className="w-full h-px bg-white/30 my-2"></div>

                        <nav className="flex flex-col gap-3 p-1">
                           <MenuButton to="/login" onClick={onClose} primary>
                                <LogIn size={16} className="text-blue-400"/>
                                <span>লগইন করুন</span>
                           </MenuButton>
                           <MenuButton to="/register" onClick={onClose}>
                                <UserPlus size={16} className="text-green-500"/>
                                <span>রেজিস্টার করুন</span>
                           </MenuButton>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UserMenu;