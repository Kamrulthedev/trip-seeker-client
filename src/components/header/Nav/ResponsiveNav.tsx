import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import ActiveLink from "../../../utils/ActiveLink";
import { naveItems } from "../../../utils/navItems";


const ResponsiveNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="md:hidden block">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 rounded-md border hover:bg-gray-100"
                aria-label="Open menu"
            >
                <HiBars3BottomLeft size={28} />
            </button>
            {/* A simplified drawer for demonstration */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
                <div className="p-4">
                    <button onClick={() => setIsOpen(false)} className="text-2xl mb-4">&times;</button>
                    <nav>
                        <ul className="flex flex-col items-start gap-4 font-semibold text-lg uppercase">
                            {naveItems.map((item) => (
                              <li key={item.path} onClick={() => setIsOpen(false)}>
                                <ActiveLink to={item.path}>{item.name}</ActiveLink>
                              </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/30 z-40"></div>}
        </div>
  );
};

export default ResponsiveNav;
