'use client'
import { useState } from "react";
import AddTaskBtn from "./AddTaskBtn";
import AddTodo from "./AddTodo";
interface NoteProps {
  header: string;
  children: React.ReactNode;
  todos: {
    id: number;
    title: string;
    deadline: Date | null;
    status: string;
    startTime: Date | null;
    endTime: Date | null;
    
  }[];
}

const NoteContainer: React.FC<NoteProps> = ({ header, children, todos }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="relative w-full overflow-y-hidden  bg-white rounded-xl shadow-sm h-screen">
        {menu &&
          <div className="absolute flex justify-center w-full h-full rounded-xl  bg-white/5 backdrop-blur-sm">
            <AddTodo handleMenu={handleMenu}/>
          </div>
        }
        <div className="p-8 gap-10 flex flex-col">
          <h1 className="text-4xl font-medium ">{header}</h1>
          <AddTaskBtn handleMenu={handleMenu} menu={menu} />
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteContainer;