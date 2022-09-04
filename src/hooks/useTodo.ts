import { useState, useEffect } from 'react';
import useError from './useError';
import { todoApiUtil } from '../api/todoApiUtil';

const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { handleError } = useError();

  const getTodoList = async () => {
    try {
      const res = await todoApiUtil.getTodoList();
      setTodoList(res.data.todos);
    } catch (error) {
      handleError(error);
    }
  };

  const addTodo = async (content: string) => {
    try {
      const res = await todoApiUtil.addTodo(content);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return { todoList, setTodoList, getTodoList, addTodo } as const;
};

export default useTodo;
