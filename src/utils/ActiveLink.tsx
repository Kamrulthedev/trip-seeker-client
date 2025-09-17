import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ActiveLinkProps {
    to: string;
    children: ReactNode;
}

const ActiveLink = ({ to, children }: ActiveLinkProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                const baseClasses = `
                    relative font-medium uppercase text-sm
                    inline-block px-4 py-2 rounded-full transition-all ease-in-out duration-300
                    border border-gray-300 hover:border-green-500
                    shadow-sm hover:shadow-md
                    hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100
                `;

                const activeClasses = `
                    text-white bg-gradient-to-r from-blue-600 via-green-500 to-blue-600
                    shadow-md hover:shadow-lg
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full
                    after:bg-gradient-to-r after:from-blue-600 after:via-green-500 after:to-blue-600
                `;

                const inactiveClasses = `
                    text-gray-700 hover:text-green-600
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0
                    after:bg-gradient-to-r after:from-blue-600 after:via-green-500 after:to-blue-600
                    hover:after:w-full
                `;

                return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
            }}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;