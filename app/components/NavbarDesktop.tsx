'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function deleteCookie(name: any) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const NavbarDesktop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  console.log(username);    

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
    deleteCookie('authToken'); // Menghapus cookie dengan nama "authToken"
    router.push('/');
  }

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
    <div className={`hidden lg:block lg:sticky z-50 top-0 ${scrolled && 'bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 '}`}>
      <div className="flex justify-between">
        <div className="flex flex-row items-center bg-white p-4 my-8 mx-10 rounded-xl shadow-sm w-2/4">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input className="ms-4 w-full focus:outline-none" type="search" placeholder="search" />
        </div>
        <div className="flex gap-4 px-8 items-center me-10 justify-center">
          <div className="flex items-center gap-4">
            <h3 className="text-xl">{username}</h3>
            <i className="fa-solid fa-chevron-down"></i>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;