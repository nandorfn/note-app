import Todo from "../components/Todo";
import TodoContainer from "../components/TodoContainer";

const Page = () => {
  const header: string = 'To-do'

    return (
        <>
          <TodoContainer header={header}>
            <Todo />
          </TodoContainer>

        </>
    );
};

export default Page;