import { ReactNode } from "react";
import NavbarMenu from "./NavbarMenu";

const Navbar = ({ children }: { children: ReactNode }) => {
    return (
        <div>
          <div>
            <NavbarMenu />
          </div>
          <div>
            {children}
          </div>
        </div>
    );
};

export default Navbar;