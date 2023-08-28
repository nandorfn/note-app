'use client'
import { format } from 'date-fns';
import { useState } from 'react';
import { usePathname, useRouter } from "next/navigation";
import TodoMenu from './TodoMenu';
interface TodosProps {
  todos: {
    id: number;
    title: string;
    deadline: Date | null;
    status: string;
    startTime: Date | null;
    endTime: Date | null;
    color: string ;
  }[];
}
const Todo: React.FC<TodosProps> = ({ todos }) => {
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);
  const handleActive = (noteId: number): void => {
    setActiveTodoId((prevTodoId) => (prevTodoId === noteId ? null : noteId));
  };
  const router = useRouter();
  const handleEdit = (todoId: number): void => {
    router.push(`to-do/${todoId}`);
  };

  const pathname = usePathname();

  return (
    <>
      {pathname === '/dashboard'
        ? todos.slice(0, 4).map((todo) => (
          <article
            key={todo.id}
            onClick={() => handleActive(todo.id)}
            onDoubleClick={() => handleEdit(todo.id)}
            className={`${todo.color}
              flex flex-col relative h-56 basis-1/2 p-4 rounded-3xl 
              ${activeTodoId === todo.id ? "border-2 border-black" : ""}
            `}
          >
            <p className='text-sm'>
              {todo.deadline ? format(new Date(todo.deadline), 'dd MMM yyyy') : 'N/A'}
            </p>

            <h2 className='text-ellipsis overflow-hidden text-4xl py-2' dangerouslySetInnerHTML={{ __html: todo.title.replace(/\n/g, "<br>") }} />

            <div className='flex flex-row gap-2 text-sm end absolute bottom-4 left-4 opacity-80'>
              <p>{todo.startTime ? format(new Date(todo.startTime), 'h:mm a') : 'N/A'} -</p>
              <p>{todo.endTime ? format(new Date(todo.endTime), 'h:mm a') : 'N/A'}</p>
            </div>

            <TodoMenu activeTodoId={activeTodoId} todo={todo} handleEdit={handleEdit} />
          </article>
        ))
        : todos.map((todo) => (
          <article
            key={todo.id}
            onClick={() => handleActive(todo.id)}
            onDoubleClick={() => handleEdit(todo.id)}
            className={`${todo.color}
              flex flex-col relative  h-56 basis-1/2 p-4 rounded-3xl 
              ${activeTodoId === todo.id ? "border-2 border-black" : ""}
            `}
          >
            <p className='text-sm'>
              {todo.deadline ? format(new Date(todo.deadline), 'dd MMM yyyy') : 'N/A'}
            </p>

            <h2 className='text-ellipsis overflow-hidden text-2xl lg:text-4xl py-2 h-2/3' >{todo.title}</h2>

            <div className='flex flex-row gap-2 text-sm end absolute bottom-4 left-4 opacity-80'>
              <p>{todo.startTime ? format(new Date(todo.startTime), 'h:mm a') : 'N/A'} -</p>
              <p>{todo.endTime ? format(new Date(todo.endTime), 'h:mm a') : 'N/A'}</p>
            </div>

            <TodoMenu activeTodoId={activeTodoId} todo={todo} handleEdit={handleEdit} />
          </article>
        ))}
    </>
  );
};

export default Todo;