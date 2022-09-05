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
      await todoApiUtil.addTodo(content);
      await getTodoList();
    } catch (error) {
      handleError(error);
    }
  };

  const editTodo = async (id: string, content: string) => {
    try {
      await todoApiUtil.editTodo(id, content);
      await getTodoList();
    } catch (error) {
      handleError(error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await todoApiUtil.deleteTodo(id);
      await getTodoList();
    } catch (error) {
      handleError(error);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      await todoApiUtil.toggleTodo(id);
      await getTodoList();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return { todoList, setTodoList, getTodoList, addTodo, updateTodo: editTodo, deleteTodo, toggleTodo } as const;
};

export default useTodo;
