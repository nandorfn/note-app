import { useRouter } from "next/navigation";
import axios from "axios";

interface TodosProps {
  todo: {
    id: number;
    title: string;
    deadline: Date | null;
    status: string;
    startTime: Date | null;
    endTime: Date | null;
  };
  activeTodoId: number | null;
  handleEdit: (todoId: number) => void;
}

const TodoMenu: React.FC<TodosProps> = ({ todo, activeTodoId, handleEdit }) => {
  const router = useRouter();

  const handleDelete = async ( todoId: number ) => {
    await axios.delete(`/api/tasks/${todoId}`);
    router.refresh();
  };


  const btnColor = {
    red: {
      color: '#ff2222'
    }
  }

  return (
    <>
      {
        activeTodoId === todo.id
          ? <div className={`absolute right-2 bottom-0 pb-6 w-full`}>
            <div className='mx-4 flex justify-end gap-6'>
              <button onClick={() => handleEdit(todo.id)} type="button">
                <i className="fa-solid fa-pen fa-lg cursor-pointer"></i>
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
              >
                <i className="fa-solid fa-trash-can fa-lg cursor-pointer" style={btnColor.red}></i>
              </button>
            </div>
          </div>
          : null
      }
    </>
  );
};

export default TodoMenu;