import { PrismaClient } from "@prisma/client";
import Note from "../notes/Note";
import NoteDashboard from "./components/NoteDashboard";
import TodoDashboard from "./components/TodoDashboard";
import Todo from "../to-do/components/Todo";
import FloatingBtn from "../components/FloatingBtn";
const prisma = new PrismaClient();

const getNote = async () => {
  const res = await prisma.note.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      color: true,
    },
  });
  return res;
}

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


const Page = async () => {
  const [notes, todos] = await Promise.all([getNote(), getTask()]);
  const header: string = 'Note';

    return (
        <>
          <TodoDashboard todos={todos}>
            <Todo todos={todos} />
          </TodoDashboard>
          <NoteDashboard notes={notes}>
            <Note notes={notes}/>
          </NoteDashboard>
          <FloatingBtn />
        </>
    );
};

export default Page;