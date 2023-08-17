'use client'

import { useState } from "react";
import List from "./List";

const NavbarMobile: React.FC = () => {
  const menuStyle: string = "absolute bg-white w-full h-screen shadow-2xl p-4 duration-500 ease-in-out "
  const [menu, setMenu] = useState(false);
  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="relative lg:hidden bg-white z-10">
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
              <List />
            </ul>
          </div>
        }
      </div>
    </>
  );
};

export default NavbarMobile;