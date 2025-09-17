import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";


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
export default ScrollToTopButton;