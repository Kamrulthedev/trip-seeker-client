import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { CartSheet } from "../cart/CartSheet";
import NavItems from "./Nav/NavItems";
import ResponsiveNav from "./Nav/ResponsiveNav";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between md:py-4">
        <ResponsiveNav />
        <Link className="cursor-pointer flex items-center lg:p-2 p-4 gap-2 bg-white rounded-2xl
                   transition-all duration-300 ease-in-out hover:scale-105"
        onClick={() => {
          console.log("Navigating to home page...");
        }}
        aria-label="Go to Trip Seeker home"
        to={"/"}
      >
          <img
            src={logo}
            alt="Trip Seeker Logo"
            className="w-12 h-12 rounded-full object-cover ring-2 bg-gradient-to-r from-blue-600 to-green-500 ring-offset-2 shadow-md
                     transition-transform duration-300 ease-in-out hover:rotate-12"
          />
          <h1 className="text-4xl font-extrabold tracking-wider
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500
                       drop-shadow-lg uppercase
                       transition-colors duration-300">
            TRIP SEEKER
          </h1>
        </Link>
        <NavItems />

        <div className="flex gap-4 text-2xl">
          <HiOutlineSearch className="hidden md:inline-block" />
          <HiOutlineUser />
          <CartSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
