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
            ? "text-primary border-b-2 border-primary pb-0.5"
            : "cursor-pointer group flex flex-col hover:text-primary transition-colors ease-in-out duration-150"
        }
      >
        {children}
        <span className="bg-primary h-0.5 w-0 group-hover:w-full transition-all ease-in-out duration-150"></span>
      </NavLink>
    </li>
  );
};

export default ActiveLink;
{
  /* <li
key={item.path}
className="cursor-pointer group flex flex-col hover:text-primary transition-colors ease-in-out duration-150"
>
<Link to={item.path}>{item.name} </Link>
<span className="bg-primary h-0.5 w-0 group-hover:w-full transition-all ease-in-out duration-150"></span>
</li>
) */
}
