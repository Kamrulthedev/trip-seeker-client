/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { X, Minus, Plus, ShoppingCart, ArrowRight } from "lucide-react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import PageCover from "../components/pageCover/PageCover";
import cartImage from "../assets/images/banner/breadcrumb.jpg";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Mock Data for Cart Items
const mockCartItems = [
    {
        id: "cpl01",
        name: "Romantic Beach Gateway",
        price: 14500,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "exp01",
        name: "Nature & Heritage Explorer",
        price: 22500,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1605649474776-e170c0177727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "fam02",
        name: "Safari & Sea Trip",
        price: 42000,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1549419137-0209c13d0af8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const AnimatedCheckoutButton = ({ disabled, children, onClick }: any) => {
    const baseButtonClasses = `
        text-sm font-bold tracking-wider rounded-md
        flex items-center justify-center gap-2
        overflow-hidden relative
    `;
    const blueTextStyle = {
        color: '#2563EB',
    };
    const hoverTextGradientStyle = {
        background: 'linear-gradient(to right, #60a5fa, #16a34a, #60a5fa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="flex justify-center w-full">
            <motion.button
                onClick={onClick}
                disabled={disabled}
                className={`${baseButtonClasses} w-full py-4
                shadow-lg transition-shadow duration-300
                bg-transparent backdrop-filter backdrop-blur-sm
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}
                `}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
            >
                <motion.div
                    className={`absolute inset-[-10px] rounded-md bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-md opacity-100 group-hover:blur-md transition-all duration-500 z-0
                    ${disabled ? 'hidden' : ''}`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-20 w-full h-full flex items-center justify-center bg-transparent rounded-md">
                    <p
                        className={`absolute inset-0 w-full h-full flex items-center justify-center
                        transition-all duration-400 ease-in-out group-hover:opacity-0 ${disabled ? 'opacity-100' : ''}`}
                        style={blueTextStyle}
                    >
                        {children}
                    </p>
                    <p
                        className={`absolute inset-0 w-full h-full flex items-center justify-center
                        transition-all duration-400 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${disabled ? 'hidden' : ''}`}
                        style={hoverTextGradientStyle}
                    >
                        {children}
                    </p>
                </div>
            </motion.button>
        </div>
    );
};


const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(mockCartItems);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 700;
    const total = subtotal > 0 ? subtotal + shipping : 0;

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            navigate('/checkout');
        }
    };

    return (
        <section className="bg-slate-50 min-h-screen">
            <PageCover image={cartImage} title="আপনার শপিং কার্ট" />
            
            <Breadcrumb className="my-5 py-6 bg-gray-100 hidden md:block">
                <BreadcrumbList className="container mx-auto">
                    <BreadcrumbItem className="text-xl text-gray-700">
                        <BreadcrumbLink asChild>
                            <Link to="/">হোম</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-500 text-2xl" />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-primary text-xl">
                            শপিং কার্ট
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
            <div className="container mx-auto py-10 px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* Cart Items List */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="popLayout">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative flex flex-col md:flex-row items-center bg-white p-4 md:p-6 rounded-lg shadow-md mb-4"
                                    >
                                        <div className="flex-shrink-0 w-full md:w-32 h-24 rounded-lg overflow-hidden mr-0 md:mr-6 mb-4 md:mb-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 w-full text-center md:text-left">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-md text-gray-600 mt-1">
                                                ৳{item.price.toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="flex items-center mt-4 md:mt-0 md:ml-auto md:w-auto w-full justify-center">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="p-2 border rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="mx-4 text-lg font-medium text-gray-800">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="p-2 border rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-right">
                                            <p className="text-xl font-bold text-primary">
                                                ৳{(item.price * item.quantity).toLocaleString()}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-500 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="col-span-1 lg:col-span-3 min-h-60 flex flex-col justify-center items-center text-center p-6 bg-white rounded-lg shadow-md"
                                >
                                    <ShoppingCart size={64} className="text-gray-300 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-700">আপনার কার্ট খালি!</h3>
                                    <p className="text-gray-500 mt-2">আপনার পছন্দের ভ্রমণ প্যাকেজগুলো দেখুন।</p>
                                    <Link
                                        to="/services"
                                        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all ease-in-out duration-300 flex items-center gap-2"
                                    >
                                        সার্ভিসেস পেজে যান <ArrowRight size={20} />
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
                        <h3 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">অর্ডার সারসংক্ষেপ</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-gray-600 text-lg">
                                <span>মোট খরচ:</span>
                                <span>৳{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 text-lg border-b pb-4">
                                <span>ডেলিভারি চার্জ:</span>
                                <span>৳{shipping.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                                <span>সর্বমোট:</span>
                                <span>৳{total.toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="mt-6 w-full group">
                            <AnimatedCheckoutButton disabled={cartItems.length === 0} onClick={handleCheckout}>
                                <MdOutlineShoppingCartCheckout size={22} className="relative z-20" />
                                <span className="relative z-20 ml-2">চেকআউট করুন</span>
                            </AnimatedCheckoutButton>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Cart;