import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";

import { CartSheet } from "../cart/CartSheet";
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
          <HiOutlineSearch className="hidden md:inline-block" />
          <HiOutlineUser />
          <CartSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
