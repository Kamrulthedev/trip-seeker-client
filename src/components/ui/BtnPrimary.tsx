/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const baseButtonClasses = `
  relative overflow-hidden font-sans font-bold text-sm
  tracking-wider uppercase transition-all duration-300 ease-in-out
  cursor-pointer border rounded-md
  flex items-center justify-center
  group
`;

const blueTextStyle = {
  color: '#F9FAFB',
};

const hoverTextGradientStyle = {
  backgroundImage: `linear-gradient(to right, #F9FAFB
, #F9FAFB
)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const BtnPrimary = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="flex justify-center">
      <motion.button
        className={`${baseButtonClasses} w-[148px] h-[46px]
        shadow-lg transition-shadow duration-300
        bg-transparent backdrop-filter backdrop-blur-sm`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-[-10px] rounded-md bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-md opacity-100 group-hover:blur-md transition-all duration-500 z-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-20 w-full h-full flex items-center justify-center bg-transparent rounded-md">
          <p
            className="absolute inset-0 w-full h-full flex items-center justify-center
            transition-all duration-400 ease-in-out group-hover:opacity-0"
            style={blueTextStyle}
          >
            {title}
          </p>
          <p
            className="absolute inset-0 w-full h-full flex items-center justify-center
            transition-all duration-400 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={hoverTextGradientStyle}
          >
            {text}
          </p>
        </div>
      </motion.button>
    </div>
  );
};


// 2. Mini Button Component with animated blur border and text hover
export const BtnPrimaryMini = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="flex justify-center">
      <motion.button
        className={`${baseButtonClasses} w-[100px] h-[33px]
        shadow-lg transition-shadow duration-300
        bg-transparent backdrop-filter backdrop-blur-sm`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated and blurred border */}
        <motion.div
          className="absolute inset-[-5px] rounded-md bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-md opacity-100 group-hover:blur-md transition-all duration-500 z-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Button content */}
        <div className="relative z-20 w-full h-full flex items-center justify-center bg-transparent rounded-md">
          <p
            className="absolute inset-0 w-full h-full flex items-center justify-center
            transition-all duration-400 ease-in-out group-hover:opacity-0"
            style={blueTextStyle}
          >
            {title}
          </p>
          <p
            className="absolute inset-0 w-full h-full flex items-center justify-center
            transition-all duration-400 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={hoverTextGradientStyle}
          >
            {text}
          </p>
        </div>
      </motion.button>
    </div>
  );
};



// --- Custom Animated Button ---
export const MenuButton = ({ to, onClick, children, primary = false }: any) => (
    <Link to={to} onClick={onClick} className="w-full">
        <motion.button
            className={`relative w-full h-[40px] flex items-center justify-center rounded-lg overflow-hidden font-semibold text-sm transition-all duration-300 group ${primary ? '' : 'bg-white/20 border border-white/30'}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            {/* Animated Gradient Border/Background */}
            <motion.div
                className="absolute inset-[-10px] bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Content */}
            <div className={`relative z-10 w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-md flex items-center justify-center gap-3 transition-colors duration-300 ${primary ? 'bg-slate-800/80 text-white group-hover:bg-slate-800/100' : 'bg-transparent text-slate-800 group-hover:bg-white/20'}`}>
                {children}
            </div>
        </motion.button>
    </Link>
);
