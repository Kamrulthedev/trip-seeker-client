import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import NavItems from "./Nav/NavItems";
import ResponsiveNav from "./Nav/ResponsiveNav";
import Logo from "./Nav/Logo";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { CartSheet } from "../cart/CartSheet";






const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const cartItemCount = 2;

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
    <>
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
          <div className="flex gap-2 sm:gap-4 text-2xl items-center">

            {/* Search Icon */}
            <button className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50">
              <HiOutlineSearch />
            </button>

            {/* User Icon */}
            <button className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50">
              <HiOutlineUser />
            </button>

            {/* --- Updated Cart Button --- */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50"
            >
              <ShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      {/* --- CartSheet Integration --- */}
      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>

  );
};

export default Header;
