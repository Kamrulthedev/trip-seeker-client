import NavItems from "./Nav/NavItems";
import ResponsiveNav from "./Nav/ResponsiveNav";
import Logo from "./Nav/Logo";
import React, { useEffect, useRef, useState } from "react";
import { SearchIcon, ShoppingCart, User } from "lucide-react";
import { CartSheet } from "../cart/CartSheet";
import Search from "../search/Search";
import UserMenu from "./UserMenu/UserMenu";


const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const cartItemCount = 2;
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle click outside for UserMenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out
                    ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"}
                `}
            >
                <div className={`container mx-auto flex items-center justify-between transition-all duration-300 ease-in-out ${isScrolled ? "md:py-2" : "md:py-3"} p-4`}>
                    <ResponsiveNav />
                    <Logo />
                    <NavItems />
                    <div className="flex gap-2 sm:gap-4 text-2xl items-center">
                        
                        <button 
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50"
                        >
                            <SearchIcon />
                        </button>

                        {/* --- Updated User Icon Button with Menu Logic --- */}
                        <div className="relative" ref={userMenuRef}>
                           <button 
                                onClick={() => setIsUserMenuOpen(prev => !prev)}
                                className="p-2 rounded-full text-gray-700 transition-colors duration-300 hover:text-green-700 hover:bg-green-50"
                           >
                                <User />
                           </button>
                           <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
                        </div>
                        
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

            {/* --- Component Integrations --- */}
            <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;
