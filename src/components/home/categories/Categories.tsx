import category1 from "../../../assets/images/categories/banner3.jpg";
import category2 from "../../../assets/images/categories/banner2.jpg";
import category3 from "../../../assets/images/categories/banner1.jpg";

import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <div className="container mx-auto md:-mt-16 md:grid grid-cols-3 gap-5 mt-10 space-y-5 md:space-y-0">
      <CategoryItem img={category1} category={"Couple & Friends Escape"} />
      <CategoryItem img={category2} category={"Explorer’s Special"} />
      <CategoryItem img={category3} category={"Family & Group Trips"} />
    </div>
  );
};

export default Categories;
