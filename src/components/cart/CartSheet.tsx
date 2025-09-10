/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Trash2, BaggageClaim } from 'lucide-react';
import trips from "../../assets/images/Service/Beach1.jpg";
import trips1 from "../../assets/images/Service/inaniImage1.jpg";

// --- Mock Data ---
const initialCartItems = [
    { id: 'cpl01', name: 'কক্সবাজার সূর্যোদয় ট্যুর', price: 4500, image: trips, quantity: 1, stock: 5 },
    { id: 'exp01', name: 'বান্দরবান ট্রেকিং অভিযান', price: 8000, image: trips1, quantity: 2, stock: 3 },
];

// --- Helper Components ---
const CartItem = ({ item, onUpdateQuantity, onRemove }: any) => (
    <motion.div
        layout
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
        className="flex items-center gap-4 py-4"
    >
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
        <div className="flex-grow">
            <h4 className="font-semibold text-gray-800">{item.name}</h4>
            <p className="text-sm text-gray-500">৳{item.price.toLocaleString('bn-BD')}</p>
            <div className="flex items-center gap-2 mt-2">
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="w-6 h-6 bg-slate-200 rounded-full disabled:opacity-50">-</button>
                <span className="font-semibold">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= item.stock} className="w-6 h-6 bg-slate-200 rounded-full disabled:opacity-50">+</button>
            </div>
        </div>
        <div className="flex flex-col items-end">
            <p className="font-bold text-lg">৳{(item.price * item.quantity).toLocaleString('bn-BD')}</p>
            <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 mt-2"><Trash2 size={18} /></button>
        </div>
    </motion.div>
);

const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <BaggageClaim size={80} className="text-slate-300 mb-4" />
        <h3 className="text-xl font-semibold text-slate-700">আপনার কার্ট খালি</h3>
        <p className="text-slate-500 mt-2">মনে হচ্ছে আপনি এখনো কোনো ট্যুর যোগ করেননি।</p>
        <Link to="/services">
            <button className="mt-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
                কেনাকাটা করুন
            </button>
        </Link>
    </div>
);


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
                        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-800">শপিং কার্ট</h2>
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
                                    <Link to="/cart" className="w-1/2">
                                        <button className="w-full bg-slate-200 text-slate-800 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors">
                                            কার্ট দেখুন
                                        </button>
                                    </Link>
                                    <Link to="/checkout" className="w-1/2">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                                            চেকআউট
                                        </button>
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