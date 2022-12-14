import { useEffect, useMemo } from 'react';
import TodoInput from '../components/TodoInput';
import TodoFilterButton from '../components/TodoFilterButton';
import TodoItem from '../components/TodoItem';
import TodoFooter from '../components/TodoFooter';
import { TodoListAction } from '../enum/TodoListAction';
import useTodo from '../hooks/useTodo';
import { useNavigate } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import { createGetObjKeyByValue } from '../utils';

const getEnumKey = createGetObjKeyByValue(TodoListAction);

const HomePage = () => {
  const { todoList, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodo();
  const navigate = useNavigate();
  const action = useQuery('action');

  const filterTodoList = useMemo<Todo[]>(() => {
    switch (action?.toLocaleLowerCase()) {
      case getEnumKey(TodoListAction.done):
        return todoList.filter((todo) => !!todo.completed_at);
      case getEnumKey(TodoListAction.todo):
        return todoList.filter((todo) => !todo.completed_at);
      case getEnumKey(TodoListAction.all):
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
          <div className='bg-white rounded-base overflow-hidden shadow-base relative z-10'>
            <TodoFilterButton />
            <div className='py-2 pl-6 sm:pr-2'>
              <ul className='max-h-[350px]  min-h-[350px] sm:max-h-[60vh] overflow-y-auto'>
                {filterTodoList.map(({ id, content, completed_at }) => (
                  <TodoItem
                    key={id}
                    isDone={!!completed_at}
                    content={content}
                    onToggleClick={() => toggleTodo(id)}
                    onEditClick={() => {}}
                    onDeleteClick={() => deleteTodo(id)}
                  />
                ))}
              </ul>
              <TodoFooter todoCount={todoCount} handleDeleteAll={handleDeleteAll} />
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center md:mt-20 mt-12'>
            <span className='text-bold text-xl'>????????????????????????</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
