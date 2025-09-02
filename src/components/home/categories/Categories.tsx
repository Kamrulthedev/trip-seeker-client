import category1 from "../../../assets/images/categories/banner3.jpg";
import category2 from "../../../assets/images/categories/banner2.jpg";
import category3 from "../../../assets/images/categories/banner1.jpg";
import { motion } from 'framer-motion';
import CategoryItem from "./CategoryItem";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Categories = () => {
  return (
    <motion.div
      className="container mx-auto px-4 md:-mt-20 lg:-mt-24 relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 my-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <CategoryItem img={category1} category={"Couple & Friends Escape"} />
      <CategoryItem img={category2} category={"Explorer’s Special"} />
      <CategoryItem img={category3} category={"Family & Group Trips"} />
    </motion.div>
  );
};

export default Categories;
