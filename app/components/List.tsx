import Link from "next/link";

const List: React.FC = () => {
  const listMenu = [
    { id: 1, text: 'Home', icon: 'fa-solid fa-house' },
    { id: 2, text: 'Notes', icon: 'fa-solid fa-note-sticky' },
    { id: 3, text: 'To-Do', icon: 'fa-solid fa-rectangle-list' },
    { id: 4, text: 'Trash', icon: 'fa-solid fa-trash-can' },
    { id: 5, text: 'Settings', icon: 'fa-solid fa-gear' }
  ]

  const iconColor = {
    color: '#9AA5BB'
  }

  return (
    <>
      {listMenu.map(list => (
        <li key={list.id}>
          <Link className="flex items-center cursor-pointer" href={list.id === 1 ? "/" : `/${list.text.toLocaleLowerCase()}`}>
            <i className={`${list.icon} fa-xl fa-fw me-8`} style={iconColor}></i>
            <p className=" text-xl text-[#9AA5BB] font-medium">{list.text}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default List;