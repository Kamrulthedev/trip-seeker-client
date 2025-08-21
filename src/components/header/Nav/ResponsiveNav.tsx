import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import logo from "../../../assets/images/logo.png";
import ActiveLink from "../../../utils/ActiveLink";
import { naveItems } from "../../../utils/navItems";
import { Button } from "../../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden block">
      <Drawer direction="left" open={open}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
            <HiBars3BottomLeft size={28} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="left-0 right-1/2 -top-24 transform transition-transform duration-300 ease-in-out">
          <div>
            <DrawerHeader>
              <DrawerTitle className="flex justify-center items-center border-b">
                <img
                    src={logo}
                    alt="Trip Seeker Logo"
                    className="lg:w-12 lg:h-12 md:w-12 md:h-12 w-10 h-10 rounded-full object-cover ring-2 border-bg-gradient-to-r from-blue-500 to-green-500 ring-offset-2 shadow-md
                     transition-transform duration-300 ease-in-out hover:rotate-12 mb-2"
                />
              </DrawerTitle>
            </DrawerHeader>
            <nav className="mt-4">
              <ul className="flex flex-col items-center justify-center gap-6 font-semibold text-lg uppercase">
                {naveItems.map((item) => (
                  <li key={item.path} onClick={() => setOpen(!open)}>
                    <ActiveLink to={item.path}>{item.name}</ActiveLink>
                  </li>
                ))}
              </ul>
            </nav>
            <DrawerFooter className="mt-16">
              <Button
                variant="outline"
                className="text-xl"
                onClick={() => setOpen(!open)}
              >
                Close
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ResponsiveNav;
