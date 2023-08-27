'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { ReactNode } from "react";
import Menu from "./Menu";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import List from "./List";

function deleteCookie(name: any) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const Navbar = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [menu, setMenu] = useState(false);
  const [alert, setAlert] = useState(false);
  
  const router = useRouter();
  useEffect(() => {
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));

    let token = null;

    if (tokenCookie) {
      token = tokenCookie.substring("authToken=".length);
    }
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const decodedToken = JSON.parse(window.atob(base64));
      setUsername(decodedToken.username);
    }
  }, []);
  
  function handleLogout() {
    deleteCookie('authToken');
    router.push('/');
  }
  const handleMenu = () => {
    setMenu(!menu);
  }
  const handleAlert = () => {
    setAlert(!alert);
    setMenu(false);
  }
  
  return (
    <div className="flex">
      <Menu>
        <List />
      </Menu>
      <div className="flex flex-col w-full">
        <NavbarDesktop 
          handleAlert={handleAlert} 
          handleLogout={handleLogout} 
          handleMenu={handleMenu}
          username={username} 
          alert={alert} 
          menu={menu} />
        <NavbarMobile 
          handleAlert={handleAlert} 
          handleLogout={handleLogout} 
          username={username}
          handleMenuLogout={handleMenu}
          menuLogout={menu}
          />
        <div className="lg:mx-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navbar;