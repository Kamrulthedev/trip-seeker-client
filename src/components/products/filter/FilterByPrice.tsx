import { setPrice } from "../../../redux/features/filterProducts/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { priceRanges } from "../../../utils/priceRange";
import { Checkbox } from "../../ui/checkbox";

const FilterByPrice = () => {
  const dispatch = useAppDispatch();
  const { price } = useAppSelector((state) => state.filter);
  console.log(price);

  return (
    <div>
      <div className="border-l-[3px] pl-2 border-black flex items-center gap-2">
        <h2 className="md:text-lg uppercase font-semibold  tracking-widest">
          Price
        </h2>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="flex flex-col items-start space-y-2 mt-5">
        {priceRanges.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-2 cursor-pointer`}
          >
            <Checkbox
              checked={price === item.value}
              onClick={() => dispatch(setPrice(item.value))}
              id={item.value.toString()}
              className="peer"
            />
            <label
              htmlFor={item.value.toString()}
              className={`text-gray-800 transition-all hover:text-primary cursor-pointer text-sm hover:font-semibold peer-checked:text-primary ${
                price === item.value ? "text-primary font-semibold" : ""
              }`}
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByPrice;
