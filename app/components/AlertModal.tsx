interface HandleProps {
  handleLogout: () => void;
  handleAlert: () => void;
}

const AlertModal: React.FC<HandleProps> = ({handleLogout, handleAlert}) => {
    return (
        <>
          <section className="absolute z-50 top-24 right-10 text-center px-6 py-4 rounded-3xl shadow-md bg-white">
            <h3 className="text-xl">Are you sure you want to log out?</h3>
            <div className="flex justify-around p-2">
              <button onClick={handleAlert} type="button">No</button>
              <button className="text-red-500" onClick={handleLogout} type="button">Confirm</button>
            </div>
          </section>
        </>
    );
};

export default AlertModal;