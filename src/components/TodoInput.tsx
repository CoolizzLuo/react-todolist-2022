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
    <form
      className='md:w-[500px] w-[310px] bg-white flex rounded-[10px] overflow-hidden shadow-base'
      onSubmit={onSubmit}
    >
      <input
        className='w-full px-4 py-3 outline-none'
        type='text'
        placeholder='新增待辦事項'
        value={value}
        onChange={handleChange}
        onKeyDown={handleEscKey}
      />
      <button className='bg-[#333] w-[40px] h-[40px] m-1 md:text-[36px] text-[30px] md:leading-[36px] leading-[30px] text-white rounded-[10px]'>
        +
      </button>
    </form>
  );
};

export default TodoInput;
