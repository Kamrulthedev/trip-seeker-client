import FilterByBrand from "../filter/FilterByBrand";
import FilterByCategories from "../filter/FilterByCategories";
import FilterByPrice from "../filter/FilterByPrice";

const ResponsiveFilter = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        show
          ? "max-h-[1000px] p-2 md:px-4 border mt-5"
          : "max-h-0 p-0 border-0 mt-0"
      } grid md:grid-cols-3 gap-x-2 gap-y-4`}
    >
      <FilterByCategories />
      <FilterByPrice />
      <FilterByBrand />
    </div>
  );
};

export default ResponsiveFilter;
