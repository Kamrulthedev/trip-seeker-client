/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { FaMobileAlt, FaCreditCard } from "react-icons/fa";
import PageCover from "../components/pageCover/PageCover";
import confirmationBg from "../assets/images/banner/bg_page.jpg";

// Custom Animated Button for Confirming Order
const AnimatedConfirmButton = ({ onClick, children, disabled }: any) => {
    const baseButtonClasses = `
        text-base font-bold tracking-wider rounded-md
        flex items-center justify-center gap-2
        overflow-hidden relative
    `;
    const blueTextStyle = { color: '#ffffff' };
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
                bg-blue-600 hover:bg-transparent backdrop-filter backdrop-blur-sm
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}
                group`}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
            >
                <div className="relative z-20 w-full h-full flex items-center justify-center bg-transparent rounded-md">
                    <p
                        className={`transition-all duration-400 ease-in-out group-hover:opacity-0 ${disabled ? 'opacity-100' : ''}`}
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

const OrderConform = () => {
    const location = useLocation();
    const [status, setStatus] = useState<'success' | 'error' | null>(null);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (location.state) {
            const { status, paymentMethod, total } = location.state;
            setStatus(status);
            setPaymentMethod(paymentMethod);
            setTotal(total);

            // Hide initial toast messages, as the main page conveys the status now
            if (status === 'success') {
                toast.success("অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!", { duration: 3000, position: 'top-center' });
            } else if (status === 'error') {
                toast.error("দুঃখিত, আপনার অর্ডারটি সম্পন্ন করা যায়নি।", { duration: 3000, position: 'top-center' });
            }
        } else {
            // Inform user if page is accessed directly
            toast.info("এই পেজটি সরাসরি অ্যাক্সেস করা সম্ভব নয়।", {
                duration: 3000,
                position: 'top-center'
            });
        }
    }, [location.state]);

    const handleConfirmOrder = () => {
        // Simulate a second successful confirmation
        toast.success("আপনার অর্ডার নিশ্চিত করা হয়েছে এবং শীঘ্রই প্রক্রিয়া শুরু হবে!");
        // You could add logic here to redirect or update state
    };

    const pageTitle = status === 'success' ? 'অর্ডার সফল হয়েছে!' : 'অর্ডার ব্যর্থ হয়েছে!';
    const icon = status === 'success' ? <CheckCircle2 size={120} className="text-green-500" /> : <XCircle size={120} className="text-red-500" />;
    const bgColor = status === 'success' ? 'bg-green-50' : 'bg-red-50';
    const textColor = status === 'success' ? 'text-green-700' : 'text-red-700';

    const renderPaymentDetails = () => {
        if (paymentMethod === 'online' && status === 'success') {
            return (
                <div className="mt-8 space-y-6">
                    <h3 className="text-xl font-bold text-gray-700">পেমেন্ট করুন</h3>
                    <p className="text-gray-600">আপনার অর্ডার নিশ্চিত করতে নিচে দেওয়া পদ্ধতি অনুযায়ী পেমেন্ট সম্পন্ন করুন।</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* bKash */}
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <FaMobileAlt size={48} className="text-pink-500 mb-4" />
                            <h4 className="font-bold text-lg mb-2">বিকাশ</h4>
                            <p className="text-gray-600 font-bold mb-2">৳{total.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">মার্চেন্ট নাম্বার: <span className="font-bold text-gray-800">017XXXXXXXX</span></p>
                            <button className="mt-4 text-sm text-blue-500 hover:text-blue-700 transition-colors">কপি করুন</button>
                        </motion.div>
                        
                        {/* Nagad */}
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <FaMobileAlt size={48} className="text-orange-500 mb-4" />
                            <h4 className="font-bold text-lg mb-2">নগদ</h4>
                            <p className="text-gray-600 font-bold mb-2">৳{total.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">মার্চেন্ট নাম্বার: <span className="font-bold text-gray-800">018XXXXXXXX</span></p>
                            <button className="mt-4 text-sm text-blue-500 hover:text-blue-700 transition-colors">কপি করুন</button>
                        </motion.div>

                        {/* Bank Card */}
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <FaCreditCard size={48} className="text-indigo-500 mb-4" />
                            <h4 className="font-bold text-lg mb-2">ব্যাংক কার্ড</h4>
                            <p className="text-sm text-gray-500 mb-2">ব্যাংক একাউন্ট নাম্বার:</p>
                            <p className="font-bold text-gray-800 mb-2">XXXX-XXXX-XXXX-1234</p>
                            <button className="mt-2 text-sm text-blue-500 hover:text-blue-700 transition-colors">কপি করুন</button>
                        </motion.div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <section className="bg-slate-50 min-h-screen">
            <PageCover image={confirmationBg} title="অর্ডার কনফার্মেশন" />
            <div className="container mx-auto py-16 px-4 md:px-0 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className={`bg-white p-8 md:p-12 rounded-lg shadow-xl text-center max-w-4xl w-full ${bgColor}`}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-6 flex justify-center"
                    >
                        {icon}
                    </motion.div>
                    
                    <h1 className={`text-4xl font-bold mb-4 ${textColor}`}>{pageTitle}</h1>
                    
                    {status === 'success' && paymentMethod === 'COD' && (
                        <p className="text-lg text-gray-600 mb-6">আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে। আমাদের টিম আপনার সাথে খুব শীঘ্রই যোগাযোগ করবে। ডেলিভারির সময় পেমেন্ট সম্পন্ন করতে পারবেন।</p>
                    )}
                    
                    {status === 'success' && paymentMethod === 'online' && (
                        <>
                            <p className="text-lg text-gray-600 mb-4">আপনার অর্ডারটি সফল হয়েছে! আপনার পেমেন্ট নিশ্চিত করতে নিচের ধাপগুলো অনুসরণ করুন।</p>
                            {renderPaymentDetails()}
                        </>
                    )}
                    
                    {status === 'error' && (
                        <p className="text-lg text-gray-600 mb-6">দুঃখিত, কোনো সমস্যার কারণে আপনার অর্ডারটি সম্পন্ন করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।</p>
                    )}

                    <div className="mt-8 max-w-xs mx-auto">
                        <AnimatedConfirmButton onClick={handleConfirmOrder} disabled={status === 'error'}>
                            অর্ডার নিশ্চিত করুন
                        </AnimatedConfirmButton>
                    </div>
                    
                    <Link to="/" className="inline-flex items-center justify-center mt-6 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors">
                        হোমপেজে ফিরে যান <ArrowRight size={16} className="ml-2" />
                    </Link>

                </motion.div>
            </div>
        </section>
    );
};

export default OrderConform;