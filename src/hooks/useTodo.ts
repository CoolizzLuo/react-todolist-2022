import { useState, useEffect } from 'react';
import { usePopupStore } from '../store/popupStore';
import useError from './useError';
import { todoApiUtil } from '../api/todoApiUtil';

const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { popup, openPopup, closePopup } = usePopupStore();
  const { handleError } = useError();

  const getTodoList = async () => {
    try {
      openPopup('loading');
      const res = await todoApiUtil.getTodoList();
      setTodoList(res.data.todos);
    } catch (error) {
      handleError(error);
    } finally {
      closePopup();
    }
  };

  const addTodo = async (content: string) => {
    try {
      openPopup('loading');
      await todoApiUtil.addTodo(content);
      await getTodoList();
    } catch (error) {
      handleError(error);
    } finally {
      closePopup();
    }
  };

  const editTodo = async (id: string, content: string) => {
    try {
      openPopup('loading');
      await todoApiUtil.editTodo(id, content);
      await getTodoList();
    } catch (error) {
      handleError(error);
    } finally {
      closePopup();
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      openPopup('loading');
      await todoApiUtil.deleteTodo(id);
      await getTodoList();
    } catch (error) {
      handleError(error);
    } finally {
      closePopup();
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      openPopup('loading');
      await todoApiUtil.toggleTodo(id);
      await getTodoList();
    } catch (error) {
      handleError(error);
    } finally {
      closePopup();
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return { todoList, setTodoList, getTodoList, addTodo, updateTodo: editTodo, deleteTodo, toggleTodo } as const;
};

export default useTodo;
