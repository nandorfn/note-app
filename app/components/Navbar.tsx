import { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
    return (
        <div>
          <div></div>
          <div>
            {children}
          </div>
        </div>
    );
};

export default Navbar;