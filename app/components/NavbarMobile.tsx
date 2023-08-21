'use client'
import { ReactNode, useState } from "react";

const NavbarMobile = ({children}: {children: ReactNode}) => {
  const menuStyle: string = "absolute bg-white w-full h-screen shadow-2xl p-4 duration-500 ease-in-out "
  const [menu, setMenu] = useState(false);
  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="relative lg:hidden bg-white z-50">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-medium">Note</h1>
          <button onClick={handleMenu} type="button">
            {menu === false
              ? <i className="fa-solid fa-bars fa-fw fa-xl"></i>
              : <i className="fa-solid fa-xmark fa-fw fa-xl"></i>
            }
          </button>
        </div>
        {menu &&
          <div className={menuStyle}>
            <ul className="flex flex-col gap-8 p-6">
              {children}
            </ul>
          </div>
        }
      </div>
    </>
  );
};

export default NavbarMobile;