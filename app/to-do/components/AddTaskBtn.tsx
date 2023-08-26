interface MenuProps {
  menu: boolean;
  handleMenu: () => void;
}

const AddTaskBtn: React.FC<MenuProps> = ({menu, handleMenu}) => {
  const green = {
    color: '#fff',
  }

    return (
        <>
          <button onClick={handleMenu} className="bg-[#75E6AC] p-3 rounded-md w-36 text-white font-medium">New Task<i className="fa-solid fa-circle-check fa-fw ms-2 fa-lg" style={green}></i></button>
        </>
    );
};

export default AddTaskBtn;