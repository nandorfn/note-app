import Note from "../notes/Note";
import NoteDashboard from "./components/NoteDashboard";
import TodoDashboard from "./components/TodoDashboard";
import Todo from "../to-do/components/Todo";
import FloatingBtn from "../components/FloatingBtn";
import { getData } from "../utils/queryDb";


const Page = async () => {
  const [notes, todos] = await Promise.all([
    getData('notes'),
    getData('tasks'), 
  ]);
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