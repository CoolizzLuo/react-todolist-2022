import { useState } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return [];
};

export default useTodo;
