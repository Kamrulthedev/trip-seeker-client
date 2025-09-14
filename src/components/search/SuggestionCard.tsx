/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';

const suggestionItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};



export const SuggestionCard = ({ term, image, onSelect, onGoogleSearch }: any) => (
    <motion.div
        className="w-1/2 md:w-1/4 p-2"
        variants={suggestionItemVariants}
        whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
    >
        <div className="relative rounded-lg shadow-lg overflow-hidden group cursor-pointer" onClick={() => onSelect(term)}>
            <img src={image} alt={term} className="w-full h-32 sm:h-40 object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-white font-bold text-base sm:text-lg truncate">{term}</h4>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onGoogleSearch(term);
                }}
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                title={`Search "${term}" on Google`}
            >
                {/* Simple Google Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.712,34.464,44,28.756,44,20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
            </button>
        </div>
    </motion.div>
);