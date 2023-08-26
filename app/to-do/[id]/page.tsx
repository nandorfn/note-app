import TodoEditor from "./TodoEditor";

const page: React.FC = () => {
  return (
    <>
      <div className="relative w-full overflow-y-hidden  bg-white rounded-xl shadow-sm mb-10 h-[80vh]">
        <div className="flex justify-center w-full h-full rounded-xl  bg-white/5 backdrop-blur-sm z-50">
          <TodoEditor />
        </div>
      </div>
    </>
  );
};

export default page;