'use client'

import { useState } from "react";

const NavbarMobile: React.FC = () => {
  const listMenu: string[][] = [
    ['Home', 'fa-solid fa-house'],
    ['Notes', 'fa-solid fa-note-sticky'],
    ['To-Do', 'fa-solid fa-rectangle-list'],
    ['Trash', 'fa-solid fa-trash-can'],
    ['Settings', 'fa-solid fa-gear']
  ]

  const iconColor = {
    color: '#9AA5BB'
  }
  const menuStyle: string = "absolute bg-white w-full h-screen shadow-2xl p-4 duration-500 ease-in-out "
  const [menu, setMenu] = useState(false);
  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="relative lg:hidden bg-white">
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
              {listMenu.map(([text, icon], index) => (
                <li key={index} className="flex items-center cursor-pointer">
                  <i className={`${icon} fa-xl fa-fw me-8`} style={iconColor}></i>
                  <p className=" text-xl text-[#9AA5BB] font-medium">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </>
  );
};

export default NavbarMobile;