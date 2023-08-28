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
    color: string;
  }[];
}

const TodoContainer: React.FC<NoteProps> = ({ header, children, todos }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="relative w-full overflow-y-hidden  bg-white rounded-xl shadow-sm mb-10">
        {menu &&
          <div className="absolute flex justify-center w-full h-full rounded-xl  bg-white/5 backdrop-blur-sm z-50">
            <AddTodo handleMenu={handleMenu} />
          </div>
        }
        <div className="p-8 gap-10 flex flex-col min-h-[84vh]">
          <h1 className="text-4xl font-medium ">{header}</h1>
          <AddTaskBtn handleMenu={handleMenu} menu={menu} />
          
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
              {children}
            </section>
          </div>
      </div>
    </>
  );
};

export default TodoContainer;