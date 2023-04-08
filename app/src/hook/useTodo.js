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

const transform = (item = {}) => {
  return {
    id: item.id,
    name: item.name,
    order: item.order,
    done: item.is_done,
  };
};

export const useTodo = create((set) => ({
  todos: [],
  get: async () => {
    const todos = await getTodo();
    const todoList = todos.data.map(transform);
    set({ todos: todoList });
  },
  add: async (item) => {
    const todos = await createTodo(item);
    const todoList = todos.data.map(transform);
    set({ todos: todoList });
  },
  edit: async (id, item) => {
    const todos = await updateTodo(id, item);
    const todoList = todos.data.map(transform);
    set({ todos: todoList });
  },
  order: async (id, { from, to }) => {
    const todos = await orderTodo(id, { from, to });
    const todoList = todos.data.map(transform);
    set({ todos: todoList });
  },
  remove: async (id, item) => {
    const todos = await deleteTodo(id);
    const todoList = todos.data.map(transform);
    set({ todos: todoList });
  },
}));
