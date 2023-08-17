import { ReactNode } from "react";
import Menu from "./Menu";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import List from "./List";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Menu>
        <List />
      </Menu>
      <div className="flex flex-col w-full">
        <NavbarDesktop />
        <NavbarMobile>
          <List />
        </NavbarMobile>
        <div className="lg:mx-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navbar;