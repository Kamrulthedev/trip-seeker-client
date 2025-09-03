/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, Search, Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ServiceCard } from '../components/home/homeServices/HomeServices';
import PageCover from '../components/pageCover/PageCover';
import servicesBg from "../assets/images/Service/inaniImage1.jpg";


// Mock Data for Travel Services in Bengali
const allTravelServices = [
    { id: 'cpl01', name: 'কক্সবাজার সূর্যোদয় ট্যুর', price: 4500, thumbnail: 'https://images.unsplash.com/photo-1617327181385-b305713b4f6f?q=80&w=800', rating: 4.8, location: 'কক্সবাজার', category: 'Couple & Friends Escape' },
    { id: 'cpl02', name: 'সেন্ট মার্টিন প্রবাল দ্বীপ', price: 7500, thumbnail: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?q=80&w=800', rating: 4.9, location: 'সেন্ট মার্টিন', category: 'Couple & Friends Escape' },
    { id: 'cpl03', name: 'সাজেক ভ্যালি মেঘের রাজ্য', price: 6500, thumbnail: 'https://images.unsplash.com/photo-1618049339391-48b18aa2b929?q=80&w=800', rating: 4.9, location: 'সাজেক', category: 'Couple & Friends Escape' },
    { id: 'exp01', name: 'বান্দরবান ট্রেকিং অভিযান', price: 8000, thumbnail: 'https://images.unsplash.com/photo-1605915492168-de86a42b1154?q=80&w=800', rating: 4.7, location: 'বান্দরবান', category: 'Explorer’s Special' },
    { id: 'exp02', name: 'সুন্দরবন ম্যানগ্রোভ সাফারি', price: 12500, thumbnail: 'https://images.unsplash.com/photo-1547902243-6d5a1a5b3f71?q=80&w=800', rating: 4.8, location: 'সুন্দরবন', category: 'Explorer’s Special' },
    { id: 'fam01', name: 'ঐতিহাসিক ঢাকা সিটি ট্যুর', price: 3500, thumbnail: 'https://images.unsplash.com/photo-1596422846543-3d0773151e23?q=80&w=800', rating: 4.6, location: 'ঢাকা', category: 'Family & Group Trips' },
    { id: 'fam02', name: 'শ্রীমঙ্গল চা বাগান ভ্রমণ', price: 4800, thumbnail: 'https://images.unsplash.com/photo-1542919598-185e4348a629?q=80&w=800', rating: 4.8, location: 'শ্রীমঙ্গল', category: 'Family & Group Trips' },
    { id: 'cpl04', name: 'টাঙ্গুয়ার হাওর ভ্রমণ', price: 5500, thumbnail: 'https://images.unsplash.com/photo-1627895429920-ce3c2a02e0b1?q=80&w=800', rating: 4.7, location: 'সুনামগঞ্জ', category: 'Couple & Friends Escape' },
    { id: 'exp03', name: 'নাফাখুম জলপ্রপাত অভিযান', price: 7800, thumbnail: 'https://images.unsplash.com/photo-1572003818344-36a5a805757d?q=80&w=800', rating: 4.6, location: 'বান্দরবান', category: 'Explorer’s Special' },
    { id: 'fam03', name: 'বগা লেক ও কেওক্রাডং', price: 8500, thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800', rating: 4.7, location: 'বান্দরবান', category: 'Family & Group Trips' },
    { id: 'exp04', name: 'হামহাম জলপ্রপাত', price: 6200, thumbnail: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800', rating: 4.5, location: 'সিলেট', category: 'Explorer’s Special' },
    { id: 'fam04', name: 'প্রাচীন পুঠিয়া মন্দির নগরী', price: 4200, thumbnail: 'https://images.unsplash.com/photo-1628042835452-71589c9a35e7?q=80&w=800', rating: 4.5, location: 'রাজশাহী', category: 'Family & Group Trips' }
];

const categories = ["সব", "Couple & Friends Escape", "Explorer’s Special", "Family & Group Trips"];


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
            min="1000"
            max="15000"
            step="500"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>৳1000</span>
            <span className="font-bold">৳{value}</span>
            <span>৳15000+</span>
        </div>
    </div>
);

// --- Main Services Page Component ---
const Services = () => {
    // State Management
    const [services, setServices] = useState(allTravelServices);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("সব");
    const [priceRange, setPriceRange] = useState(15000);
    const [selectedRating, setSelectedRating] = useState(0);
    const [sortOrder, setSortOrder] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const servicesPerPage = 8;

    // Filtering and Sorting Logic
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
            filtered.sort((a, b) => {
                if (sortOrder === "price-asc") return a.price - b.price;
                if (sortOrder === "price-desc") return b.price - a.price;
                if (sortOrder === "rating-desc") return b.rating - a.rating;
                return 0;
            });
        }

        setServices(filtered);
        setCurrentPage(1); // Reset to first page on filter change
    }, [searchQuery, selectedCategory, priceRange, selectedRating, sortOrder]);

    // Pagination Logic
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
        setPriceRange(15000);
        setSelectedRating(0);
        setSortOrder("");
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

    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDetailsClick = (service: any) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-slate-50">
            <PageCover image={servicesBg}  title="আমাদের সকল সার্ভিস" />
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Desktop Filter Sidebar */}
                    <aside className="hidden lg:block">
                        <FilterSidebar />
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        {/* Search and Sort Bar */}
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 p-4 bg-white rounded-lg shadow">
                            <div className="relative w-full md:w-1/2">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="সার্ভিস খুঁজুন..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
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

                        {/* Service Cards Grid */}
                        <AnimatePresence>
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                            >
                                {currentServices.map(service => (
                                    <ServiceCard key={service.id} service={service} onDetailsClick={handleDetailsClick} />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination */}
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

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsFilterOpen(false)}
                    >
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
        </div>
    );
};

export default Services;