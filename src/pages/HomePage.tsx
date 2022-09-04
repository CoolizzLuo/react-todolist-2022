import { useEffect } from 'react';
import TodoInput from '../components/TodoInput';
import TodoFilterButton from '../components/TodoFilterButton';
import useTodo from '../hooks/useTodo';
import { useNavigate } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import squareIcon from '../assets/squareIcon.svg';
import checkIcon from '../assets/checkIcon.svg';
import closeIcon from '../assets/closeIcon.svg';
import { TodoListAction } from '../enum/TodoListAction';

const HomePage = () => {
  const { todoList, setTodoList, getTodoList, addTodo } = useTodo();
  const navigate = useNavigate();
  const action = useQuery('action');

  useEffect(() => {
    if (!Object.keys(TodoListAction).includes(action?.toLocaleLowerCase() || '')) {
      navigate('/?action=all');
    }
  }, [action, navigate]);

  return (
    <div className='flex justify-center'>
      <div className='md:w-[500px] w-[310px]'>
        <div className='mb-4'>
          <TodoInput handleSubmit={addTodo} />
        </div>
        <div className='bg-white rounded-base overflow-hidden shadow-base'>
          <TodoFilterButton />
          <div className='h-[400px]'>
            <ul className='py-2 px-6'>
              <li className='flex justify-between'>
                <div className='w-full border-b-[#EFEFEF] border-b-2 border-b-solid py-4 mr-4'>
                  <div className='flex'>
                    <button className='min-w-[20px]'>
                      <img src={squareIcon} alt='square' />
                    </button>
                    <p className=' ml-4 line-clamp-2 text-ellipsis whitespace-nowrap overflow-hidden'>
                      把冰箱發霉的檸檬拿去丟
                    </p>
                  </div>
                </div>
                <button className='min-w-[15px]'>
                  <img src={closeIcon} alt='close' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
