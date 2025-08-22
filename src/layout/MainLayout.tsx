import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Newsletter from "../components/newsletter/Newsletter";
import { motion, AnimatePresence } from "framer-motion";


const MainLayout = () => {
 const location = useLocation(); 

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
    </div>
  );
};

export default MainLayout;
