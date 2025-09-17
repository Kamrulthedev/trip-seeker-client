import React from "react";
import { naveItems } from "../../../utils/navItems";
import ActiveLink from "../../../utils/ActiveLink";



const ResponsiveNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
    );
    
    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );


    return (
        <div className="md:hidden block">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-1  text-white hover:text-blue-500 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                aria-label="Open menu"
            >
               <div className="border rounded-md border-green-400">
                 <MenuIcon />
               </div>
            </button>
            
            <div 
                onClick={() => setIsOpen(false)} 
                className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            ></div>

            <div className={`fixed top-0 left-0 w-72 h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-[100]`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">TRIP SEEKER</h2>
                        {/* --- Updated Close Button --- */}
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="p-2 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                            aria-label="Close menu"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <nav className="flex-grow p-4">
                        <ul className="flex flex-col gap-2 font-medium text-gray-700 uppercase text-md">
                            {naveItems.map((item) => (
                              <li key={item.path} onClick={() => setIsOpen(false)}>
                                <ActiveLink to={item.path}>{item.name}</ActiveLink>
                              </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <div className="p-4 border-t text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()}K Dev / Trip Seeker BD</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNav;