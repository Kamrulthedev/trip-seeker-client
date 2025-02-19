import { setSort } from "../../../redux/features/filterProducts/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const SortProduct = () => {
  const dispatch = useAppDispatch();
  return (
    <Select onValueChange={(value) => dispatch(setSort(value))}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Default Sorting</SelectLabel>
          <SelectItem value="-price">Price, high to low</SelectItem>
          <SelectItem value="price">Price, low to high</SelectItem>
          <SelectItem value="-createdAt">Newest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortProduct;
