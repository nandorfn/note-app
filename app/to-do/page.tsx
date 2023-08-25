import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodoContainer from "./components/TodoContainer";
import type { TaskStatus, TaskScheduleEnum } from "@prisma/client"

interface TaskFormData {
  title: string;
  deadline: string;
  status: TaskStatus;
  schedule: TaskScheduleEnum;
  timeSlotId?: number;
}

const Home = () => {
  const header: string = 'To-do'

    return (
        <>
          <AddTodo />
          {/* <TodoContainer header={header}>
            <Todo />
          </TodoContainer> */}

        </>
    );
};

export default Home;