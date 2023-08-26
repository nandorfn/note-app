'use client'
import { format } from 'date-fns';
import { useState } from 'react';
interface TodosProps {
  todos: {
    id: number;
    title: string;
    deadline: Date | null;
    status: string;
    startTime: Date | null;
    endTime: Date | null;

  }[];
}
const Todo: React.FC<TodosProps> = ({ todos }) => {
  const [activeTodoId, setActiveTodoId] = useState<number|null>(null);
  
  const handleActive = (noteId: number): void => {
    setActiveTodoId((prevTodoId) => (prevTodoId === noteId ? null : noteId));
  };


  return (
    <>
      {todos.map((todo) => (
        <article 
          key={todo.id} 
          onClick={() => handleActive(todo.id)}
          className={`flex flex-col relative bg-yellow-300 h-56 basis-1/2 p-4 rounded-3xl ${activeTodoId === todo.id ? "border-2 border-black" : ""
        }`}>
          <p className='text-sm'>{todo.deadline ? format(new Date(todo.deadline), 'dd MMM yyyy') : 'N/A'}</p>
          
          <h2 className='text-4xl py-2'>{todo.title}</h2>
          
          <article className='flex flex-row gap-2 text-sm end absolute bottom-4 left-4 opacity-80'>
            <p>{todo.startTime ? format(new Date(todo.startTime), 'h:mm a') : 'N/A'} -</p>
            <p>{todo.endTime ? format(new Date(todo.endTime), 'h:mm a') : 'N/A'}</p>
          </article>
        </article>
      ))}
    </>
  );
};

export default Todo;