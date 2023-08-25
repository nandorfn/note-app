'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'

const List: React.FC = () => {
  const listMenu = [
    { id: 1, text: 'Home', icon: 'fa-solid fa-house' },
    { id: 2, text: 'Notes', icon: 'fa-solid fa-note-sticky' },
    { id: 3, text: 'To-Do', icon: 'fa-solid fa-rectangle-list' },
    { id: 4, text: 'Trash', icon: 'fa-solid fa-trash-can' },
    { id: 5, text: 'Settings', icon: 'fa-solid fa-gear' }
  ]
  const pathname = usePathname();

  return (
    <>
      {listMenu.map(list => (
        <li key={list.id} className={`cursor-pointer ${pathname === `/${list.text.toLocaleLowerCase()}` ? 'bg-[#75E6AC] rounded-2xl shadow-inner drops' : ''}`}>
          <Link className="flex items-center cursor-pointer  p-4" href={list.id === 1 ? "/" : `/${list.text.toLocaleLowerCase()}`}>

          <i
          className={`${list.icon} fa-xl fa-fw me-8`}
          style={{
            color: pathname === `/${list.text.toLocaleLowerCase()}` ? '#FFFFFF' : '#9AA5BB'
          }}
        ></i>




            <p className={` text-xl text-[#9AA5BB] font-medium ${pathname === `/${list.text.toLocaleLowerCase()}` ? 'text-white' : ''}`}>{list.text}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default List;