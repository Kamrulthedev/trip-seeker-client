/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const BtnPrimaryMini = ({ text, title, onClick }: any) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      background: "linear-gradient(270deg, #2563eb, #22c55e, #2563eb)", // blue → green → blue
      backgroundSize: "200% 200%",
      animation: "gradientMove 12s ease infinite", // slow smooth animation
      color: "white",
    }}
    className="font-semibold rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
    title={title}
  >
    {text}
  </motion.button>
);

const MainLayout = () => {
  const location = useLocation();


  // usePageRefreshWarning();

  // State for showing the button
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <div className="fixed bottom-5 right-5">
          <BtnPrimaryMini
            text="↑"
            title="Scroll to top"
            onClick={scrollToTop}
          />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
