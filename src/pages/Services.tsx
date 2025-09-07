/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, Search, Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ServiceCard } from '../components/home/homeServices/HomeServices';
import PageCover from '../components/pageCover/PageCover';

import servicesBg from "../assets/images/Service/inaniImage1.jpg";
import Beach1 from "../assets/images/Service/Beach1.jpg";
import Beach2 from "../assets/images/Service/Beach2.jpg";
import Beach3 from "../assets/images/Service/Beach3.jpg";
import Beach4 from "../assets/images/Service/Beach4.jpg";

import patuertek1 from "../assets/images/Service/patuertek1.jpg";
import patuertek2 from "../assets/images/Service/patuertek2.jpg";
import patuertek3 from "../assets/images/Service/patuertek3.jpg";
import patuertek4 from "../assets/images/Service/patuertek4.jpg";
import patuertekTamil from "../assets/images/Service/patuertekTamil.jpg";

import inaniImage1 from "../assets/images/Service/inaniImage1.jpg";
import inaniImage2 from "../assets/images/Service/inaniImage2.png";
import inaniImage3 from "../assets/images/Service/inaniImage3.png";
import inaniImage4 from "../assets/images/Service/inaniImage4.jpg";
import inaniTamil from "../assets/images/Service/inaniTamil.png";
import { ServiceDetailModal } from '../components/home/homeServices/HomeService';


// Mock Data for Travel Services in Bengali
const allTravelServices = [
    { id: "cpl01", name: "Romantic Beach Gateway", price: 14500, thumbnail: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890", images: ["https://images.unsplash.com/photo-1507525428034-b723a9ce6890", "https://images.unsplash.com/photo-1520454974749-611b7248ff25", "https://images.unsplash.com/photo-1519046904884-53103b34b206", "https://images.unsplash.com/photo-1534777367048-135a549e2413"], rating: 4.8, location: "লাবণী ও কলাতলী পয়েন্ট, কক্সবাজার", category: "Couple & Friends Escape", description: "প্রিয়জন বা বন্ধুর সাথে কক্সবাজারের মনোরম সমুদ্রসৈকতে একান্ত সময় কাটান।", features: ["৩ তারকা হোটেল (১ রাত, ২ দিন)", "সকালের নাস্তা ও রাতের খাবার", "এসি গাড়ি দ্বারা যাতায়াত", "লাবণী ও কলাতলী সৈকতে ভ্রমণ"] },
    { id: "cpl02", name: "Inani & Himchori Adventure", price: 16500, thumbnail: "https://images.unsplash.com/photo-1588253969500-3075a331dfa9", images: ["https://images.unsplash.com/photo-1588253969500-3075a331dfa9", "https://images.unsplash.com/photo-1618751939022-835a23534bda", "https://images.unsplash.com/photo-1590523277543-a94d28524035", "https://images.unsplash.com/photo-1617327181385-b305713b4f6f"], rating: 4.7, location: "ইনানী ও হিমছড়ি, কক্সবাজার", category: "Couple & Friends Escape", description: "ঝরনা, পাহাড় আর ইনানীর ঝিনুক ভরা সৈকতে রোমাঞ্চকর ভ্রমণ।", features: ["৩ তারকা হোটেল (২ রাত, ৩ দিন)", "প্রাতঃরাশ ও রাতের খাবার", "এসি মাইক্রোবাস", "ইনানী বিচ ও হিমছড়ি ভ্রমণ"] },
    { id: "exp01", name: "Nature & Heritage Explorer", price: 22500, thumbnail: "https://images.unsplash.com/photo-1605915492168-de86a42b1154", images: ["https://images.unsplash.com/photo-1605915492168-de86a42b1154", "https://images.unsplash.com/photo-1549880338-65ddcdfd017b", "https://images.unsplash.com/photo-1572003818344-36a5a805757d", "https://images.unsplash.com/photo-1551632811-561732d1e306"], rating: 4.9, location: "রামু, হিমছড়ি, ইনানী", category: "Explorer’s Special", description: "প্রকৃতি আর ঐতিহ্যের মেলবন্ধন – পাহাড়, সমুদ্র আর রামুর বৌদ্ধ মন্দির ভ্রমণ।", features: ["৪ তারকা হোটেল (২ রাত, ৩ দিন)", "সব খাবারের ব্যবস্থা", "এসি কোস্টার", "হিমছড়ি ভিউপয়েন্ট, ইনানী বিচ, রামু ভ্রমণ"] },
    { id: "fam01", name: "Family Beach Holiday", price: 38000, thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945", images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9", "https://images.unsplash.com/photo-1618773928121-c32242e63f39"], rating: 4.8, location: "কক্সবাজার প্রধান সমুদ্রসৈকত", category: "Family & Group Trips", description: "পরিবার নিয়ে সমুদ্রসৈকতের আনন্দে ভরা একটি ঝামেলামুক্ত ছুটি।", features: ["৩ তারকা হোটেল (২ রাত, ৩ দিন)", "সকালের নাস্তা, দুপুর ও রাতের খাবার", "বড় বাস/কোস্টার", "প্রধান সৈকত ও হিমছড়ি ভ্রমণ"] },
    { id: "fam02", name: "Safari & Sea Trip", price: 42000, thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbb563", images: ["https://images.unsplash.com/photo-1542314831-068cd1dbb563", "https://images.unsplash.com/photo-1582719508461-905c673771fd", "https://images.unsplash.com/photo-1611892440504-42a792e24d32", "https://images.unsplash.com/photo-1568495248636-6432b97bd949"], rating: 4.9, location: "ডুলাহাজারা সাফারি পার্ক, ইনানী", category: "Family & Group Trips", description: "প্রকৃতি, বন্যপ্রাণী আর সৈকতের আনন্দ – সব মিলিয়ে দারুণ এক ভ্রমণ।", features: ["৩ তারকা হোটেল (২ রাত, ৩ দিন)", "সব খাবার", "ডুলাহাজারা সাফারি পার্ক ভ্রমণ", "ইনানী বিচ ট্যুর"] }
];

const categories = ["সব", "Couple & Friends Escape", "Explorer’s Special", "Family & Group Trips"];


// --- Reusable Components for the Services Page ---

// Accordion for Filters
const AccordionItem = ({ title, children, defaultOpen = false }: any) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b">
            <button className="flex justify-between items-center w-full py-4" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-semibold text-gray-700">{title}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Price Range Slider
const PriceRangeSlider = ({ value, onChange }: any) => (
    <div>
        <input
            type="range"
            min="10000"
            max="60000" // Increased max price
            step="1000"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>৳10000</span>
            <span className="font-bold">৳{value}</span>
            <span>৳60000+</span>
        </div>
    </div>
);

// --- Main Services Page Component ---
const Services = () => {
    const [services, setServices] = useState(allTravelServices);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("সব");
    const [priceRange, setPriceRange] = useState(60000); // Increased initial price
    const [selectedRating, setSelectedRating] = useState(0);
    const [sortOrder, setSortOrder] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;

    useEffect(() => {
        let filtered = allTravelServices;
        if (searchQuery) {
            filtered = filtered.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        if (selectedCategory !== "সব") {
            filtered = filtered.filter(s => s.category === selectedCategory);
        }
        filtered = filtered.filter(s => s.price <= priceRange);
        if (selectedRating > 0) {
            filtered = filtered.filter(s => s.rating >= selectedRating);
        }
        if (sortOrder) {
            const sorted = [...filtered].sort((a, b) => {
                if (sortOrder === "price-asc") return a.price - b.price;
                if (sortOrder === "price-desc") return b.price - a.price;
                if (sortOrder === "rating-desc") return b.rating - a.rating;
                return 0;
            });
            filtered = sorted;
        }
        setServices(filtered);
        setCurrentPage(1);
    }, [searchQuery, selectedCategory, priceRange, selectedRating, sortOrder]);
    
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = services.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(services.length / servicesPerPage);

    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    
    const resetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("সব");
        setPriceRange(60000);
        setSelectedRating(0);
        setSortOrder("");
    };

    const handleDetailsClick = (service: any) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const FilterSidebar = () => (
        <div className="space-y-6">
            <AccordionItem title="ক্যাটেগরি" defaultOpen>
                <div className="space-y-2">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setSelectedCategory(cat)} className={`w-full text-left p-2 rounded-md transition-colors ${selectedCategory === cat ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-slate-100'}`}>
                            {cat}
                        </button>
                    ))}
                </div>
            </AccordionItem>
            <AccordionItem title="মূল্য পরিসীমা">
                <PriceRangeSlider value={priceRange} onChange={setPriceRange} />
            </AccordionItem>
            <AccordionItem title="রেটিং অনুযায়ী ফিল্টার">
                <div className="flex justify-around">
                    {[5, 4, 3].map(rating => (
                         <button key={rating} onClick={() => setSelectedRating(rating)} className={`flex items-center gap-1 p-2 rounded-md transition-colors ${selectedRating === rating ? 'bg-blue-100' : 'hover:bg-slate-100'}`}>
                             {rating} <Star size={16} className="text-yellow-400 fill-yellow-400" />+
                         </button>
                    ))}
                </div>
            </AccordionItem>
             <button onClick={resetFilters} className="w-full flex items-center justify-center gap-2 p-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 transition-colors">
                ফিল্টার রিসেট করুন
            </button>
        </div>
    );

    return (
        <div className="bg-slate-50">
            <PageCover title="আমাদের সকল সার্ভিস" image="https://images.unsplash.com/photo-1534777367048-135a549e2413?q=80&w=2070&auto=format&fit=crop" />
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="hidden lg:block">
                        <FilterSidebar />
                    </aside>
                    <main className="lg:col-span-3">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 p-4 bg-white rounded-lg shadow">
                             <div className="relative w-full md:w-1/2">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input type="text" placeholder="সার্ভিস খুঁজুন..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="flex gap-2 items-center">
                                <button onClick={() => setIsFilterOpen(true)} className="lg:hidden p-2 border rounded-md flex items-center gap-2">
                                    <Filter size={20} /> ফিল্টার
                                </button>
                                <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">সাজান</option>
                                    <option value="price-asc">মূল্য: কম থেকে বেশি</option>
                                    <option value="price-desc">মূল্য: বেশি থেকে কম</option>
                                    <option value="rating-desc">রেটিং অনুযায়ী</option>
                                </select>
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {currentServices.map(service => (
                                    <ServiceCard key={service.id} service={service} onDetailsClick={handleDetailsClick} />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {totalPages > 1 && (
                            <div className="flex justify-center mt-12">
                                <nav className="flex items-center gap-2">
                                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="p-2 border rounded-md disabled:opacity-50">&laquo;</button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                        <button key={number} onClick={() => paginate(number)} className={`px-4 py-2 border rounded-md ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                                            {number}
                                        </button>
                                    ))}
                                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 border rounded-md disabled:opacity-50">&raquo;</button>
                                </nav>
                            </div>
                        )}
                         {services.length === 0 && (
                            <div className="text-center py-20">
                                <h3 className="text-2xl font-semibold text-gray-700">কোনো সার্ভিস পাওয়া যায়নি</h3>
                                <p className="text-gray-500 mt-2">আপনার ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।</p>
                                <button onClick={resetFilters} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    রিসেট করুন
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div className="fixed inset-0 z-50 bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsFilterOpen(false)}>
                        <motion.aside
                            className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-xl"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold">ফিল্টার</h3>
                                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
                            </div>
                            <FilterSidebar />
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>

            <ServiceDetailModal service={selectedService} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Services;