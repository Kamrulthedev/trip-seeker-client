/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';


export const CartItem = ({ item, onUpdateQuantity, onRemove }: any) => (
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
