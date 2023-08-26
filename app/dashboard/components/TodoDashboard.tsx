'use client'
import { useState } from "react";
interface NoteProps {
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

const TodoDashboard: React.FC<NoteProps> = ({children, todos }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="relative w-full overflow-y-hidden  bg-white rounded-xl shadow-sm mb-10">
        <div className="p-8 gap-10 flex flex-col min-h-fit">
          <h1 className="text-4xl font-medium ">Todo</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
              {children}
            </section>
          </div>
      </div>
    </>
  );
};

export default TodoDashboard;