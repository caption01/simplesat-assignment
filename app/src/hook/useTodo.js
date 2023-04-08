import { create } from 'zustand';

import { axios } from '../axios';

const getTodo = async () => {
  return await axios.get('todo/');
};

const createTodo = async (item) => {
  return await axios.post('todo/', item);
};

const updateTodo = async (id, item) => {
  return await axios.put(`todo/${id}/`, item);
};

const orderTodo = async (id, { from, to }) => {
  return await axios.put(`todo/${id}/order/`, { from, to });
};

const deleteTodo = async (id) => {
  return await axios.delete(`todo/${id}/`);
};

export const useTodo = create((set) => ({
  todos: [],
  get: async () => {
    const todos = await getTodo();
    set({ todos: todos.data });
  },
  add: async (item) => {
    const todos = await createTodo(item);
    set({ todos: todos.data });
  },
  edit: async (id, item) => {
    const todos = await updateTodo(id, item);
    set({ todos: todos.data });
  },
  reOrder: async (id, { from, to }) => {
    const todos = await orderTodo(id, { from, to });
    set({ todos: todos.data });
  },
  remove: async (id, item) => {
    const todos = await deleteTodo(id);
    set({ todos: todos.data });
  },
}));
