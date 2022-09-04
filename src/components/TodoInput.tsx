import React from 'react';
import useInput from '../hooks/useInput';
import useError from '../hooks/useError';

interface TodoInputProps {
  handleSubmit: (content: string) => Promise<any>;
}

const TodoInput = ({ handleSubmit }: TodoInputProps) => {
  const { value, setValue, handleChange, handleEscKey } = useInput();
  const { handleError } = useError();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const _value = value.trim();

      if (!_value.trim()) throw Error('內容不可為空');
      await handleSubmit(_value);

      setValue('');
    } catch (error: any) {
      handleError(error);
    }
  };

  return (
    <form className='bg-white flex rounded-base overflow-hidden shadow-base' onSubmit={onSubmit}>
      <input
        className='w-full px-4 py-3 outline-none'
        type='text'
        placeholder='新增待辦事項'
        value={value}
        onChange={handleChange}
        onKeyDown={handleEscKey}
        autoFocus
      />
      <button className='bg-[#333] min-w-[40px] h-[40px] m-1 sm:text-[36px] text-[30px] leading-[40px] text-white rounded-base'>
        +
      </button>
    </form>
  );
};

export default TodoInput;
