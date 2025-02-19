import ActiveLink from "../../../utils/ActiveLink";
import { naveItems } from "../../../utils/navItems";

const NavItems = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8  font-semibold  uppercase">
        {naveItems.map((item) => (
          <ActiveLink key={item.path} to={item.path}>
            {item.name}
          </ActiveLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
