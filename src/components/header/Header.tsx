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
      <div className="container mx-auto flex items-center justify-between md:py-6 ">
        <ResponsiveNav />
        <Link to={"/"}>
          <img src={logo} alt="gymdo logo" className="w-36" />
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
