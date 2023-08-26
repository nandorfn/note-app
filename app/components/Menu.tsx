import Image from "next/image";
import logo from '../../public/logo.png';
import { ReactNode } from "react";

const NavbarMenu = ({children}: {children: ReactNode}) => {

  return (
    <>
      <div className="hidden lg:block lg:sticky top-0 bg-white w-80  h-screen p-6 shadow-sm">
        <div>
          <Image 
            src={logo}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <ul  className="flex flex-col pt-6 gap-4">
          {children}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;