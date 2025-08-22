import { HiCake, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import NavItems from "./Nav/NavItems";
import ResponsiveNav from "./Nav/ResponsiveNav";
import Logo from "./Nav/Logo";
import React from "react";


const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Effect to handle scroll event
  React.useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    // Conditionally apply classes based on the isScrolled state
    // Added transition-all for smooth animation
    <header
      className={`
        fixed top-0 backdrop-blur-sm left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"}
      `}
    >
      {/* Conditionally change padding for a shrinking effect */}
      <div className={`container mx-auto flex items-center justify-between transition-all duration-300 ease-in-out ${isScrolled ? "md:py-2" : "md:py-3"}`}>
        <ResponsiveNav />
        <Logo />
        <NavItems />
        <div className="flex gap-2 sm:gap-4 text-2xl">
          {/* Search Button */}
          <button className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50">
            <HiOutlineSearch className="hidden md:inline-block" />
          </button>

          {/* User Button */}
          <button className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50">
            <HiOutlineUser />
          </button>

          {/* Cart Button */}
          <button className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50">
            <HiCake />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
