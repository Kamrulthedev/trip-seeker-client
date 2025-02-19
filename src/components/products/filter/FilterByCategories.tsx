import { setCategory } from "../../../redux/features/filterProducts/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { categories } from "../../../utils/categories";

const FilterByCategories = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.filter);

  return (
    <div>
      <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
        <h2 className="md:text-lg uppercase font-semibold  tracking-widest">
          Categories
        </h2>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="flex flex-col items-start space-y-2 mt-5">
        {categories.map((item) => (
          <span
            key={item}
            onClick={() => dispatch(setCategory(item))}
            className={`text-gray-800 hover:ml-3 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold ${
              category === item ? "text-primary font-semibold" : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterByCategories;
