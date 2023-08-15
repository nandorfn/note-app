import Image from "next/image";
import logo from '../../public/logo.png';


const NavbarMenu: React.FC = () => {
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
          {listMenu.map(([text, icon], index) => (
            <li key={index} className="flex items-center cursor-pointer">
              <i className={`${icon} fa-xl fa-fw me-8`} style={iconColor}></i>
              <p className=" text-xl text-[#9AA5BB] font-medium">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;