/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowUp, MessageCircle, Send, X } from "lucide-react";
import AIGuideButton from "../components/AIModel/AIGuideButton";

// Scroll to top button - (as per user request, this is fine)
const ScrollToTopButton = ({ onClick, title }: { onClick: () => void; title: string }) => {
    return (
        <motion.button
            className="relative overflow-hidden font-sans font-bold
            cursor-pointer border rounded-full
            flex items-center justify-center group
            w-14 h-14 shadow-lg border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            title={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="absolute inset-[-10px] rounded-full bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-md z-0"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 w-[90%] h-[90%] flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full">
                <ArrowUp className="text-white h-6 w-6" />
            </div>
        </motion.button>
    );
};



// Main Layout Component
const MainLayout = () => {
    const location = useLocation();
    const [showButton, setShowButton] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <Header />
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Newsletter />
            <Footer />
            {showButton && (
                <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
                    <ScrollToTopButton title="Scroll to top" onClick={scrollToTop} />
                    <AIGuideButton title="এআই ট্র্যাভেল গাইড" onClick={toggleModal} />
                </div>
            )}
            <AIModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    );
};

export default MainLayout;