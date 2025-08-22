import { HiCake, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import NavItems from "./Nav/NavItems";
import ResponsiveNav from "./Nav/ResponsiveNav";
import Logo from "./Nav/Logo";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between md:py-3">
        <ResponsiveNav />
        <Logo></Logo>
        <NavItems />
        <div className="flex gap-4 text-2xl lg:-mr-10">
          {/* Search Button */}
            <button className="relative overflow-hidden rounded-lg p-1 text-gray-700 transition-all duration-300 hover:text-green-700 hover:border-2 hover:border-green-500">
            <HiOutlineSearch className="hidden md:inline-block" />
          </button>

          {/* User Button */}
          <button className="relative overflow-hidden rounded-lg p-1 text-gray-700 transition-all duration-300 hover:text-green-700 hover:border-2 hover:border-green-500">
            <HiOutlineUser />
          </button>

          {/* Cart Button with Ripple */}
         <button className="relative overflow-hidden rounded-lg p-1 text-gray-700 transition-all duration-300 hover:text-green-700 hover:border-2 hover:border-green-500">
            <HiCake />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
