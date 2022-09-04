import TodoInput from '../components/TodoInput';
import useTodo from '../hooks/useTodo';

const HomePage = () => {
  const { todoList, setTodoList, getTodoList, addTodo } = useTodo();

  return (
    <div className='flex justify-center'>
      <TodoInput handleSubmit={addTodo} />
      <div>
        <div className=''>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
