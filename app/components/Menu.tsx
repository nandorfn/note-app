import Image from "next/image";
import logo from '../../public/logo.png';
import { ReactNode } from "react";

const NavbarMenu = ({children}: {children: ReactNode}) => {

  return (
    <>
      <div className="hidden lg:block lg:sticky top-0 bg-white w-80  h-screen p-4 shadow-sm">
        <div>
          <Image 
            src={logo}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        <ul  className="flex flex-col pt-8 gap-8 p-6">
          {children}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;