import { NavLink } from "react-router-dom";

interface IActiveLinkProps {
  to: string;
  children: string;
}


const ActiveLink = ({ to, children }: IActiveLinkProps) => {
  return (
  <li>
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-[length:200%_200%] animate-gradient-x " +
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-600 after:via-green-500 after:to-blue-600"
        : "relative font-semibold text-gray-700 transition-all ease-in-out duration-300 " +
          "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-blue-600 hover:bg-[length:200%_200%] hover:animate-gradient-x " +
          "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:via-green-500 after:to-blue-600 " +
          "after:transition-all after:duration-300 hover:after:w-full"
    }
  >
    {children}
  </NavLink>
</li>
  );
};

export default ActiveLink;

