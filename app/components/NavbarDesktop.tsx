'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import LogoutMenu from "./LogoutMenu";

interface NavDeskProps {
  handleLogout: () => void;
  handleAlert: () => void;
  handleMenu: () => void;
  username: string;
  alert: boolean;
  menu: boolean;
}

const NavbarDesktop: React.FC<NavDeskProps> = ({
  handleMenu,
  handleLogout,
  handleAlert,
  username,
  alert,
  menu
}) => {
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <>
      {alert &&
        <AlertModal handleLogout={handleLogout} handleAlert={handleAlert} />
      }
      <div className={`hidden lg:block lg:sticky top-0 z-50 ${scrolled && 'bg-white-800 bg-opacity-60 bg-clip-padding rounded-md backdrop-filter backdrop-blur-lg'}`}>
        <div className="flex justify-between">
          <div className="flex flex-row items-center w-2/4 p-4 mx-10 my-8 bg-white rounded-xl shadow-sm">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="w-full ms-4 focus:outline-none" type="search" placeholder="search" />
          </div>
          <div className="flex justify-center items-center gap-4 px-8 me-10">
            <LogoutMenu 
              handleAlert={handleAlert} 
              handleMenu={handleMenu} 
              menu={menu} 
              username={username}/>
          </div>
        </div>
      </div>
    </>
  );


};

export default NavbarDesktop;