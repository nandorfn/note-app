'use client'

import { useState, useEffect } from "react";

const NavbarDesktop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
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
      <div className={`hidden lg:block lg:sticky z-50 top-0 ${scrolled && 'bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 ' }`}>
        <div className="flex justify-between">
          <div className="flex flex-row items-center bg-white p-4 my-8 mx-10 rounded-xl shadow-sm w-2/4">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="ms-4 w-full focus:outline-none" type="search" placeholder="search" />
          </div>
          <div className="flex gap-4 px-8 items-center me-10 justify-center">
            <div className="py-3 px-2 bg-blue-400 rounded-full">
              <i className="fa-solid fa-user-tie fa-fw fa-xl"></i>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-xl">Firnando</h3>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NavbarDesktop;