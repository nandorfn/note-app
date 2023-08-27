interface NavDeskProps {
  handleAlert: () => void;
  handleNavMenu?: () => void;
  handleMenu: () => void;
  username: string;
  menu: boolean;
}
const LogoutMenu: React.FC<NavDeskProps> = ({handleNavMenu, handleAlert, handleMenu, menu, username}) => {
  const handleBothActions = () => {
    handleAlert();
    if (handleNavMenu) {
      handleNavMenu();
    }
  };

    return (
        <>
          <div className="relative flex items-center gap-4 px-4 py-2 bg-white shadow-xs rounded-full h-fit">
              <h3 className="z-10 text-md">{username}</h3>
              <button className="z-10" onClick={handleMenu} type="button">
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              {menu && (
                <button className="absolute top-8 right-0 w-full h-14 flex justify-center items-center bg-white -mt-3 shadow-sm rounded-b-2xl text-red-600" 
                onClick={handleBothActions}>
                  Logout
                </button>
              )}
            </div>
        </>
    );
};

export default LogoutMenu;