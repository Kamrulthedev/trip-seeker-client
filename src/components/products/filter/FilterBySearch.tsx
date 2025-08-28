import React, { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


const FilterBySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");


  // State to track the latest search term

  // useEffect to dispatch setSearch after 5 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handle input change and update local state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value); // Update local state immediately
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
