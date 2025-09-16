/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { FaMobileAlt, FaCreditCard } from "react-icons/fa";
import PageCover from "../components/pageCover/PageCover";
import confirmationBg from "../assets/images/banner/bg_page.jpg";

const OrderConfrom = () => {
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

            if (status === 'success') {
                toast.success("অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!", {
                    duration: 5000,
                    position: 'top-center'
                });
            } else if (status === 'error') {
                toast.error("দুঃখিত, আপনার অর্ডারটি সম্পন্ন করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।", {
                    duration: 5000,
                    position: 'top-center'
                });
            }
        } else {
            // Redirect to home if accessed directly without state
            // For a real app, you might want to show a generic error page
            toast.info("এই পেজটি সরাসরি অ্যাক্সেস করা সম্ভব নয়।", {
                duration: 5000,
                position: 'top-center'
            });
        }
    }, [location.state]);

    const title = status === 'success' ? 'অর্ডার সফল হয়েছে!' : 'অর্ডার ব্যর্থ হয়েছে!';
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
                    className={`bg-white p-8 md:p-12 rounded-lg shadow-xl text-center max-w-2xl w-full ${bgColor}`}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-6 flex justify-center"
                    >
                        {icon}
                    </motion.div>
                    
                    <h1 className={`text-4xl font-bold mb-4 ${textColor}`}>{title}</h1>
                    
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

                    <Link to="/" className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        হোমপেজে ফিরে যান <ArrowRight size={20} className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default OrderConfrom;