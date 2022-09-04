interface TodoFooterProps {
  todoCount: number;
  handleDeleteAll: () => void;
}
const TodoFooter = ({ todoCount, handleDeleteAll }: TodoFooterProps) => (
  <div className='flex justify-between my-4'>
    <span>{`${todoCount} 個待完成項目`}</span>
    <button className='text-[#9F9A91] hover:text-[#333]' onClick={handleDeleteAll}>
      清除已完成項目
    </button>
  </div>
);

export default TodoFooter;
