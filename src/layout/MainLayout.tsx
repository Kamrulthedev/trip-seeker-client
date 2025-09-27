/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AIGuideButton from "../components/AIModel/AIGuideButton";
import AIModal from "../components/AIModel/AIModel";
import ScrollToTopButton from "../utils/ScrollToTopButton";

// Main Layout Component
const MainLayout = () => {
  const location = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
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

      {/* AI Travel Guide Button (Always Visible) */}
      <div className="fixed bottom-24 right-8 z-50">
        <AIGuideButton title="AI Travel Guide" onClick={toggleModal} />
      </div>

      {/* Scroll to Top Button (Visible on Scroll) */}
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 z-50">
          <ScrollToTopButton title="Scroll to top" onClick={scrollToTop} />
        </div>
      )}
      
      {/* AI Modal */}
      <AIModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default MainLayout;