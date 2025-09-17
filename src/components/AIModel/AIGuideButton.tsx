import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";


// AI Guide Button (New, smarter design)
const AIGuideButton = ({ onClick, title }: { onClick: () => void; title: string }) => {
    return (
        <motion.button
            className="relative cursor-pointer rounded-full flex items-center justify-center w-14 h-14 shadow-lg bg-gradient-to-r from-green-500 to-blue-500"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            title={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <MessageCircle className="text-white h-7 w-7" />
        </motion.button>
    );
};


export default AIGuideButton;