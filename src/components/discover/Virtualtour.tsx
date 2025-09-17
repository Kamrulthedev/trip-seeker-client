/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";
import { useState } from "react";
import virtualVideoUrl from "../../assets/images/discover/virtual (1).mp4" 

const containerVariants:any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const modalVariants:any = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } }
};


const Virtualtour = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="relative py-28 h-[80vh] md:h-[96vh] flex items-center justify-center text-center text-white overflow-hidden">
                <video
                    src={virtualVideoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    className="relative z-10 p-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg" variants={itemVariants}>
                        <motion.span
                            className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            কক্সবাজারকে অনুভব করুন
                        </motion.span>
                    </motion.h2>
                    <motion.button
                        variants={itemVariants}
                        className="group flex flex-col sm:flex-row items-center justify-center mx-auto gap-3 text-lg sm:text-2xl font-semibold hover:text-green-300 transition-colors duration-300"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <PlayCircle size={60} className="transition-transform group-hover:scale-110" />
                        </motion.div>
                        <span>ভার্চুয়াল ট্যুর দেখুন</span>
                    </motion.button>
                </motion.div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-3 right-3 z-20 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>
                            <div className="aspect-video">
                                <video
                                    src={virtualVideoUrl}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                    playsInline
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Virtualtour;