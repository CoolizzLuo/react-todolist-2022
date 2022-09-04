import { useEffect, useMemo } from 'react';
import TodoInput from '../components/TodoInput';
import TodoFilterButton from '../components/TodoFilterButton';
import TodoItem from '../components/TodoItem';
import TodoFooter from '../components/TodoFooter';
import { TodoListAction } from '../enum/TodoListAction';
import useTodo from '../hooks/useTodo';
import { useNavigate } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import { getKeyByValue } from '../utils';
import emptyImg from '../assets/empty_logo.png';

const HomePage = () => {
  const { todoList, setTodoList, getTodoList, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodo();
  const navigate = useNavigate();
  const action = useQuery('action');

  const filterTodoList = useMemo<Todo[]>(() => {
    switch (action?.toLocaleLowerCase()) {
      case getKeyByValue(TodoListAction, TodoListAction.done):
        return todoList.filter((todo) => !!todo.completed_at);
      case getKeyByValue(TodoListAction, TodoListAction.todo):
        return todoList.filter((todo) => !todo.completed_at);
      case getKeyByValue(TodoListAction, TodoListAction.all):
      default:
        return todoList;
    }
  }, [todoList, action]);

  const todoCount = useMemo<number>(() => todoList.filter((todo) => !todo.completed_at).length, [todoList]);

  useEffect(() => {
    if (!Object.keys(TodoListAction).includes(action?.toLocaleLowerCase() || '')) {
      navigate('/?action=all');
    }
  }, [action, navigate]);

  const handleDeleteAll = async () => {
    const deleteList = todoList.filter((todo) => !!todo.completed_at);
    deleteList.forEach(async ({ id }) => {
      await deleteTodo(id);
    });
  };

  return (
    <div className='flex justify-center'>
      <div className='sm:w-[500px] w-[310px]'>
        <div className='mb-4'>
          <TodoInput handleSubmit={addTodo} />
        </div>
        {!!todoList.length ? (
          <div className='bg-white rounded-base overflow-hidden shadow-base'>
            <TodoFilterButton />
            <div className='py-2 pl-6 sm:pr-2'>
              <ul className='max-h-[350px]  min-h-[350px] sm:max-h-[60vh]overflow-y-auto'>
                {filterTodoList.map(({ id, content, completed_at }) => (
                  <TodoItem
                    key={id}
                    isDone={!!completed_at}
                    content={content}
                    onToggleClick={() => toggleTodo(id)}
                    onDeleteClick={() => deleteTodo(id)}
                  />
                ))}
              </ul>
              <TodoFooter todoCount={todoCount} handleDeleteAll={handleDeleteAll} />
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center mt-20'>
            <span className='text-bold text-xl mb-10'>目前尚無待辦事項</span>
            <img className='w-[240px]' src={emptyImg} alt='title' />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
