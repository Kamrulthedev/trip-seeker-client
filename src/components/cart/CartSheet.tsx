/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import trips from "../../assets/images/Service/Beach1.jpg";
import trips1 from "../../assets/images/Service/inaniImage1.jpg";
import { EmptyCart } from './EmptyCart';
import { CartItem } from './CartItem';
import { BtnPrimary } from '../ui/BtnPrimary';

// --- Mock Data ---
const initialCartItems = [
    { id: 'cpl01', name: 'কক্সবাজার সূর্যোদয় ট্যুর', price: 4500, image: trips, quantity: 1, stock: 5 },
    { id: 'exp01', name: 'বান্দরবান ট্রেকিং অভিযান', price: 8000, image: trips1, quantity: 2, stock: 3 },
];


// --- Main CartSheet Component ---
export const CartSheet = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleUpdateQuantity = (id: string, newQuantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const handleRemoveItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="absolute top-0 right-0 h-full w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl flex flex-col"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-800">বুকিং সার্ভিস</h2>
                            <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 transition-colors">
                                <X size={24} className="text-slate-600" />
                            </button>
                        </div>

                        {/* Cart Content */}
                        <div className="flex-grow overflow-y-auto p-6">
                            {cartItems.length > 0 ? (
                                <AnimatePresence>
                                    <motion.div layout className="divide-y divide-slate-200">
                                        {cartItems.map(item => (
                                            <CartItem key={item.id} item={item} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveItem} />
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                <EmptyCart />
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-slate-200 bg-white/70">
                                <div className="flex justify-between items-center mb-4 text-lg">
                                    <span className="font-semibold text-slate-600">মোট:</span>
                                    <span className="font-bold text-slate-800">৳{subtotal.toLocaleString('bn-BD')}</span>
                                </div>
                                <div className="flex gap-4">
                                    <Link to="/cart" className="w-1/2" onClick={onClose}>
                                        <BtnPrimary text="কার্ট দেখুন" title="কার্ট দেখুন" />
                                    </Link>
                                    <Link to="/checkout" className="w-1/2" onClick={onClose}>
                                        <BtnPrimary text="চেকআউট" title="চেকআউট" />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};