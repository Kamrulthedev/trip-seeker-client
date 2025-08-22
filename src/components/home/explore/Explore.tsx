/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import mainImageUrl from "../../../assets/images/categories/banner1.jpg";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const Button = ({ children, className, ...props }: any) => (
  <button 
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);
// --- End of Mocking ---


// Animation Variants
const containerVariants : any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageContainerVariants:any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // A nice ease-out-expo curve
    },
  };


const Explore = () => {
  return (
    <section className="bg-white font-sans">
      <motion.div 
        className="container mx-auto grid min-h-[80vh] grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* --- Text Content --- */}
        <motion.article className="flex flex-col items-start text-left">
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Discover Your <br />
            <span className="text-violet-600">Perfect Nest</span>
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-lg text-lg leading-8 text-gray-600"
            variants={itemVariants}
          >
            Explore our curated collection of furniture designed to bring comfort,
            style, and personality to every corner of your home. Find pieces that
            truly reflect you.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10">
            <Link to="/products">
              <Button className="group bg-gray-900 text-white hover:bg-gray-800 h-12 px-8 text-lg">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.article>

        {/* --- Image Container --- */}
        <motion.article 
            className="relative hidden lg:block"
            variants={imageContainerVariants}
        >
          <div className="relative h-[550px] w-full rounded-lg bg-violet-100">
            <img
              src={mainImageUrl}
              alt="Comfortable modern sofa"
              className="absolute top-4 right-4 h-full w-full rounded-lg object-cover shadow-2xl"
            />
             <img
              src={mainImageUrl}
              alt="Stylish wooden chair"
              className="absolute -bottom-8 -left-8 h-64 w-64 rounded-lg object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default Explore;