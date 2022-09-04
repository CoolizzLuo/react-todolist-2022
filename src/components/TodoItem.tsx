import squareIcon from '../assets/squareIcon.svg';
import checkIcon from '../assets/checkIcon.svg';
import closeIcon from '../assets/closeIcon.svg';

interface TodoItemProps {
  isDone: boolean;
  content: string;
  onToggleClick: () => void;
  onDeleteClick: () => void;
}

const TodoItem = ({ isDone, content, onToggleClick, onDeleteClick }: TodoItemProps) => {
  const doneStyle = 'line-through italic text-[#9F9A91]';

  return (
    <li className='flex justify-between'>
      <div className='w-full border-b-[#EFEFEF] border-b-2 border-b-solid py-4 mr-4'>
        <div className='flex'>
          <button className='min-w-[20px]' onClick={onToggleClick}>
            <img src={isDone ? checkIcon : squareIcon} alt='square' />
          </button>
          <p className={`ml-4 ${isDone ? doneStyle : ''}`}>{content}</p>
        </div>
      </div>
      <button className='min-w-[15px] mr-3'>
        <img src={closeIcon} alt='delete' onClick={onDeleteClick} />
      </button>
    </li>
  );
};

export default TodoItem;
