'use client'
import { ReactNode, useState } from "react";
import List from "./List";
import LogoutMenu from "./LogoutMenu";
interface NavDeskProps {
  handleLogout: () => void;
  handleAlert: () => void;
  handleMenuLogout: () => void;
  menuLogout: boolean;
  username: string;
}


const NavbarMobile: React.FC<NavDeskProps> = ({ handleMenuLogout, menuLogout, handleLogout, handleAlert, username }) => {
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
            <div className="flex justify-end">
              <LogoutMenu
                handleNavMenu={handleMenu}
                handleMenu={handleMenuLogout}
                handleAlert={handleAlert}
                menu={menuLogout}
                username={username} />
            </div>
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