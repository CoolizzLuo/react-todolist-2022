import { useNavigate } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import { TodoListAction } from '../enum/TodoListAction';

interface ButtonProps {
  content: string | any;
  active?: boolean;
  onClick?: () => void;
}

const Button = ({ content, active = false, onClick }: ButtonProps) => {
  const defaultClass = 'border-b-[#EFEFEF] text-[#9F9A91]';
  const activeClass = 'border-b-[#333] text-[#333]';
  return (
    <button
      className={`w-full  border-b-2 border-b-solid  font-bold py-3 hover:text-[#333] hover:border-b-[#333] ${
        active ? activeClass : defaultClass
      }`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

interface TodoFilterButtonProps {}

const TodoFilterButton = (props: TodoFilterButtonProps) => {
  const navigate = useNavigate();
  const currentAction = useQuery('action');

  return (
    <div className='flex px-1'>
      {Object.keys(TodoListAction).map((action) => (
        <Button
          key={action}
          content={TodoListAction[action as keyof typeof TodoListAction]}
          active={action === currentAction?.toLocaleLowerCase()}
          onClick={() => navigate(`/?action=${action}`)}
        />
      ))}
    </div>
  );
};

export default TodoFilterButton;
