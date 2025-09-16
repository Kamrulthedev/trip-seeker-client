/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { useState } from "react";
import {
    HiMiniArrowPath,
    HiMiniCreditCard,
    HiOutlineShieldCheck,
    HiOutlineSparkles,
    HiOutlineTruck,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Textarea } from "../components/ui/textarea";
import PageCover from "../components/pageCover/PageCover";
import checkoutBannar from "../assets/images/banner/bg_page.jpg";
import AnimatedButton from "../utils/Checkout/AnimatedButton";

// Mock Data for Order Summary
const mockCartItems = [
    {
        id: "cpl01",
        name: "রোমান্টিক বিচ গেটওয়ে",
        price: 14500,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "exp01",
        name: "নেচার এন্ড হেরিটেজ এক্সপ্লোরার",
        price: 22500,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1605649474776-e170c0177727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [items] = useState(mockCartItems);

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 700;
    const codCharge = paymentMethod === "COD" ? subtotal * 0.10 : 0;
    const total = subtotal + shipping + codCharge;

    const handlePlaceOrder = () => {
        const errors: string[] = [];
        if (!contact) errors.push("অনুগ্রহ করে আপনার মোবাইল নাম্বার লিখুন।");
        if (!fullName.firstName || !fullName.lastName) errors.push("অনুগ্রহ করে আপনার পুরো নাম লিখুন।");
        if (!address) errors.push("অনুগ্রহ করে আপনার ঠিকানা লিখুন।");
        if (!postalCode) errors.push("অনুগ্রহ করে আপনার পোস্টাল কোড লিখুন।");
        if (!city) errors.push("অনুগ্রহ করে আপনার শহরের নাম লিখুন।");

        if (errors.length) {
            errors.forEach((error) => toast.error(error));
            return;
        }

        // Simulating a successful order placement
        toast.success("আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে!");
        // You can add your actual order placement logic here
        // navigate('/order-confirmation');
    };

    return (
        <section className="bg-slate-50 min-h-screen">
            <PageCover image={checkoutBannar} title="চেকআউট" />
            
            <Breadcrumb className="my-5 py-6 bg-gray-100 hidden md:block">
                <BreadcrumbList className="container mx-auto">
                    <BreadcrumbItem className="md:text-xl text-lg text-gray-700">
                        <BreadcrumbLink asChild>
                            <Link to="/">হোম</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-500 text-2xl" />
                    <BreadcrumbItem className="md:text-xl text-lg text-gray-700">
                        <BreadcrumbLink asChild>
                            <Link to="/cart">কার্ট</Link>
                        </BreadcrumbLink>
                        <BreadcrumbSeparator className="text-gray-500 text-2xl" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-green-500 md:text-xl text-lg">
                            চেকআউট
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
            <div className="container mx-auto py-10 px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Checkout Form */}
                    <aside className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">যোগাযোগের ঠিকানা</h2>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            <Label className="block mb-2 text-gray-700">যোগাযোগ</Label>
                            <Input
                                type="text"
                                placeholder="ইমেল অথবা মোবাইল ফোন নাম্বার"
                                className="mb-5"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </motion.div>
                        
                        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">ডেলিভারি ঠিকানা</h2>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label className="block mb-2 text-gray-700">প্রথম নাম</Label>
                                    <Input type="text" placeholder="প্রথম নাম" required value={fullName.firstName} onChange={(e) => setFullName({ ...fullName, firstName: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="block mb-2 text-gray-700">শেষ নাম</Label>
                                    <Input type="text" placeholder="শেষ নাম" required value={fullName.lastName} onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label className="block mb-2 text-gray-700">শহর</Label>
                                    <Input type="text" placeholder="শহর" required value={city} onChange={(e) => setCity(e.target.value)} />
                                </div>
                                <div>
                                    <Label className="block mb-2 text-gray-700">পোস্টাল কোড</Label>
                                    <Input type="text" placeholder="পোস্টাল কোড" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <Label className="block mb-2 text-gray-700">ঠিকানা</Label>
                                <Textarea placeholder="বাড়ির নম্বর, ভবন, রাস্তা, এলাকা" required value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </motion.div>
                        
                        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">পেমেন্ট মেথড</h2>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <RadioGroup
                                defaultValue={paymentMethod}
                                onValueChange={(value) => setPaymentMethod(value)}
                                className="space-y-4"
                            >
                                <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-md">
                                    <RadioGroupItem value="COD" id="COD" />
                                    <Label htmlFor="COD" className="text-lg">ক্যাশ অন ডেলিভারি (COD)</Label>
                                </div>
                                <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-md">
                                    <RadioGroupItem value="online" id="online" />
                                    <Label htmlFor="online" className="text-lg">অনলাইন পেমেন্ট</Label>
                                </div>
                            </RadioGroup>
                        </motion.div>
                    </aside>

                    {/* Order Summary */}
                    <aside className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-4">অর্ডারের সারসংক্ষেপ</h2>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 py-2 border-b">
                                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-600">পরিমাণ: {item.quantity}</p>
                                    </div>
                                    <p className="font-bold text-primary">৳{(item.price * item.quantity).toLocaleString()}</p>
                                </div>
                            ))}
                        </motion.div>

                        <div className="space-y-4 mt-6">
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex justify-between items-center text-gray-600 text-lg">
                                <span>মোট খরচ:</span>
                                <span>৳{subtotal.toLocaleString()}</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex justify-between items-center text-gray-600 text-lg">
                                <span>ডেলিভারি চার্জ:</span>
                                <span>৳{shipping.toLocaleString()}</span>
                            </motion.div>
                            {paymentMethod === "COD" && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="flex justify-between items-center text-gray-600 text-lg">
                                    <span>COD চার্জ:</span>
                                    <span>৳{codCharge.toLocaleString()}</span>
                                </motion.div>
                            )}
                            <div className="flex justify-between items-center text-xl font-bold text-gray-800 border-t pt-4 mt-4">
                                <span>সর্বমোট:</span>
                                <span>৳{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-6 w-full group">
                            <AnimatedButton disabled={items.length === 0} onClick={handlePlaceOrder}>
                                {paymentMethod === "COD" ? (
                                    <>
                                        <HiOutlineSparkles size={22} className="relative z-20" />
                                        <span className="relative z-20 ml-2">অর্ডার করুন</span>
                                    </>
                                ) : (
                                    <>
                                        <HiMiniCreditCard size={22} className="relative z-20" />
                                        <span className="relative z-20 ml-2">পেমেন্ট করে অর্ডার করুন</span>
                                    </>
                                )}
                            </AnimatedButton>
                        </div>
                        
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 space-y-2 text-lg text-gray-600">
                            <p className="flex items-center gap-2">
                                <HiOutlineShieldCheck size={22} className="text-blue-500" /> সুরক্ষিত চেকআউট
                            </p>
                            <p className="flex items-center gap-2">
                                <HiOutlineTruck size={22} className="text-blue-500" /> দ্রুত ডেলিভারি
                            </p>
                            <p className="flex items-center gap-2">
                                <HiMiniArrowPath size={22} className="text-blue-500" /> সহজ রিটার্ন
                            </p>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Checkout;