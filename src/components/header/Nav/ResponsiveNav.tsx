/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import { naveItems } from "../../../utils/navItems";
// import ActiveLink from "../../../utils/ActiveLink";

// const ResponsiveNav = () => {
//     const [isOpen, setIsOpen] = React.useState(false);

//     // SVG icon to replace the one from react-icons
//     const MenuIcon = () => (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
//         </svg>
//     );

//     return (
//         <div className="md:hidden block">
//             <button 
//                 onClick={() => setIsOpen(!isOpen)} 
//                 className="p-2 rounded-md border hover:bg-gray-100"
//                 aria-label="Open menu"
//             >
//                 <MenuIcon />
//             </button>
            
//             {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-[90]"></div>}
//             <div className={`fixed top-0 left-0 w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-[100]`}>
//                 <div className="p-4 bg-white h-full">
//                     <div className="flex justify-end">
//                         <button onClick={() => setIsOpen(false)} className="text-3xl mb-4 hover:text-red-500 transition-colors">&times;</button>
//                     </div>
//                     <nav>
//                         <ul className="flex flex-col items-start gap-6 font-semibold text-lg uppercase">
//                             {naveItems.map((item) => (
//                               <li key={item.path} onClick={() => setIsOpen(false)}>
//                                 <ActiveLink to={item.path}>{item.name}</ActiveLink>
//                               </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResponsiveNav;



import React from "react";

// Mock components for a runnable example.
// You would import your actual components.
const naveItems = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/gallery", name: "Gallery" },
  { path: "/about", name: "About" },
];
const ActiveLink = ({ to, children } : any) => (
    <a href={to} className="block py-2 px-3 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
        {children}
    </a>
);


const ResponsiveNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    // Menu Icon SVG
    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
    );
    
    // Close Icon SVG for better styling
    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );


    return (
        <div className="md:hidden block">
            {/* --- Updated Menu Button --- */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-1  text-white hover:text-blue-500 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                aria-label="Open menu"
            >
               <div className="border rounded-md border-green-300">
                 <MenuIcon />
               </div>
            </button>
            
            {/* --- Fading Overlay --- */}
            <div 
                onClick={() => setIsOpen(false)} 
                className={`fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* --- Drawer --- */}
            {/* CHANGED: Added 'h-screen' to make the drawer full height */}
            <div className={`fixed top-0 left-0 w-72 h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-[100]`}>
                <div className="flex flex-col h-full">
                    {/* --- Drawer Header --- */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-bold text-blue-600">TRIP SEEKER</h2>
                        {/* --- Updated Close Button --- */}
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="p-2 rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                            aria-label="Close menu"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* --- Navigation Links --- */}
                    <nav className="flex-grow p-4">
                        <ul className="flex flex-col gap-2 font-medium text-gray-700 uppercase text-md">
                            {naveItems.map((item) => (
                              <li key={item.path} onClick={() => setIsOpen(false)}>
                                <ActiveLink to={item.path}>{item.name}</ActiveLink>
                              </li>
                            ))}
                        </ul>
                    </nav>
                    
                    {/* --- Drawer Footer --- */}
                    <div className="p-4 border-t text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Trip Seeker</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNav;