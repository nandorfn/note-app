import { ReactNode } from "react";
import Menu from "./Menu";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Menu />
      <div className="flex flex-col w-full">
        <NavbarDesktop />
        <NavbarMobile />
        <div className="lg:mx-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navbar;