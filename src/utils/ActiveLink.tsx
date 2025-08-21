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
            ? "relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-[length:200%_200%] animate-gradient-x border-b-2 border-transparent bg-clip-border border-gradient-to-r from-blue-600 to-green-500"
            : "relative font-semibold text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-blue-600 hover:bg-[length:200%_200%] hover:animate-gradient-x transition-all ease-in-out duration-300"
        }
      >
        {children}
      </NavLink>
    </li>

  );
};

export default ActiveLink;

