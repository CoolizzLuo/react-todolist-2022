import { AxiosResponse } from 'axios';
import { apiClient, BaseResponse } from './apiUtil';
import { Todo } from '../models/Todo';

type TodoListResponse = {
  todos: Todo[];
};

type TodoResponse = {
  id: string;
  content: string;
};

interface ITodoApiUtil {
  getTodoList: () => Promise<AxiosResponse<TodoListResponse | BaseResponse>>;
  addTodo: (content: string) => Promise<AxiosResponse<TodoResponse | BaseResponse>>;
  updateTodo: (id: string, content: string) => Promise<AxiosResponse<TodoResponse | BaseResponse>>;
  deleteTodo: (id: string) => Promise<AxiosResponse<BaseResponse>>;
  toggleTodo: (id: string) => Promise<AxiosResponse<Todo | BaseResponse>>;
}

export const todoApiUtil: ITodoApiUtil = {
  getTodoList: async () => await apiClient().get('/todos'),
  addTodo: async (content) => await apiClient().post('/todos', { todo: { content } }),
  updateTodo: async (id, content) => await apiClient().put(`/todos/${id}`, { todo: { content } }),
  deleteTodo: async (id) => await apiClient().delete(`/todos/${id}`),
  toggleTodo: async (id) => await apiClient().patch(`/todos/${id}/toggle`),
};
