import { BaggageClaim } from "lucide-react";
import { Link } from "react-router-dom";

export const EmptyCart = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <BaggageClaim size={80} className="text-slate-300 mb-4" />
        <h3 className="text-xl font-semibold text-slate-700">আপনার কার্ট খালি</h3>
        <p className="text-slate-500 mt-2">মনে হচ্ছে আপনি এখনো কোনো ট্যুর যোগ করেননি।</p>
        <Link to="/services">
            <button className="mt-6 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
               সার্ভিস বুকিং করুন
            </button>
        </Link>
    </div>
);
