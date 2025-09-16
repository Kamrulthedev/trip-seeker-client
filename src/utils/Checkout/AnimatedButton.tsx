// Custom Animated Button Component
const AnimatedButton = ({ disabled, children, onClick }: any) => {
    const baseButtonClasses = `
        text-base font-bold tracking-wider rounded-md
        flex items-center justify-center gap-2
        overflow-hidden relative
    `;
    const blueTextStyle = { color: '#2563EB' };
    const hoverTextGradientStyle = {
        background: 'linear-gradient(to right, #60a5fa, #16a34a, #60a5fa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="flex justify-center w-full">
            <motion.button
                onClick={onClick}
                disabled={disabled}
                className={`${baseButtonClasses} w-full py-4
                shadow-lg transition-shadow duration-300
                bg-transparent backdrop-filter backdrop-blur-sm
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}
                `}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
            >
                <motion.div
                    className={`absolute inset-[-10px] rounded-md bg-[conic-gradient(#60a5fa,#16a34a,#60a5fa)] filter blur-md opacity-100 group-hover:blur-md transition-all duration-500 z-0
                    ${disabled ? 'hidden' : ''}`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-20 w-full h-full flex items-center justify-center bg-transparent rounded-md">
                    <p
                        className={`absolute inset-0 w-full h-full flex items-center justify-center
                        transition-all duration-400 ease-in-out group-hover:opacity-0 ${disabled ? 'opacity-100' : ''}`}
                        style={blueTextStyle}
                    >
                        {children}
                    </p>
                    <p
                        className={`absolute inset-0 w-full h-full flex items-center justify-center
                        transition-all duration-400 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${disabled ? 'hidden' : ''}`}
                        style={hoverTextGradientStyle}
                    >
                        {children}
                    </p>
                </div>
            </motion.button>
        </div>
    );
};
export default AnimatedButton;