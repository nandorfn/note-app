import { getData } from "../utils/queryDb";
import Todo from "./components/Todo";
import TodoContainer from "./components/TodoContainer";

const Home = async () => {
  const header: string = 'To-do'
  const todos = await getData('tasks');

    return (
        <>
          <TodoContainer header={header} todos={todos}>
            <Todo todos={todos}/>
          </TodoContainer>

        </>
    );
};

export default Home;