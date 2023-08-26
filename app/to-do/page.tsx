import Todo from "./components/Todo";
import TodoContainer from "./components/TodoContainer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getTask = async () => {
  const res = await prisma.task.findMany({
    select: {
      id: true,
      title: true,
      deadline: true,
      status: true,
      startTime: true,
      endTime: true,
    },
  });
  return res;
}


const Home = async () => {
  const header: string = 'To-do'
  const todos = await getTask();

    return (
        <>
          <TodoContainer header={header} todos={todos}>
            <Todo todos={todos}/>
          </TodoContainer>

        </>
    );
};

export default Home;