
const ExperienceItem = ({ experience, imagePosition }: { experience: any, imagePosition: 'left' | 'right' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';
    const textOrder = imagePosition === 'left' ? 'lg:order-last' : 'lg:order-first';

    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={`overflow-hidden rounded-xl shadow-2xl ${imageOrder}`}>
                <motion.img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-[450px] object-cover"
                    style={{ y }}
                />
            </div>

            <div className={`flex flex-col justify-center ${textOrder}`}>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{experience.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{experience.description}</p>
            </div>
        </motion.div>
    );
};
export default ExperienceItem;