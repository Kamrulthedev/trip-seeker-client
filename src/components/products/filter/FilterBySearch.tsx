import React, { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { setSearch } from "../../../redux/features/filterProducts/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const FilterBySearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filter = useAppSelector((state) => state.filter);
  console.log(filter);

  // State to track the latest search term
  const [latestSearchTerm, setLatestSearchTerm] = useState<string>("");

  // useEffect to dispatch setSearch after 5 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(latestSearchTerm));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [latestSearchTerm, dispatch]);

  // Handle input change and update local state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value); // Update local state immediately
    setLatestSearchTerm(value); // Update latest search term
  };

  return (
    <div className="ui-input-container">
      <input
        required
        placeholder="Search Product..."
        className="ui-input"
        type="text"
        value={searchTerm}
        onChange={handleChange} // Use handleChange for input onChange event
      />
      <div className="ui-input-underline"></div>
      <div className="ui-input-highlight"></div>
      <div className="ui-input-icon">
        <HiOutlineMagnifyingGlass />
      </div>
    </div>
  );
};

export default FilterBySearch;
