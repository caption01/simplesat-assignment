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

const getTodoList = (axiosResponse) => {
  const responseData = axiosResponse.data;

  return responseData ? responseData.data.map(transform) : [];
};

export const useTodo = create((set) => ({
  todos: [],
  get: async () => {
    const response = await getTodo();
    set({ todos: getTodoList(response) });
  },
  add: async (newTask = '') => {
    const response = await createTodo({ name: newTask });
    set({ todos: getTodoList(response) });
  },
  edit: async (id, item) => {
    const response = await updateTodo(id, item);
    set({ todos: getTodoList(response) });
  },
  order: async (id, { from, to }) => {
    const response = await orderTodo(id, { from, to });
    set({ todos: getTodoList(response) });
  },
  remove: async (id) => {
    const response = await deleteTodo(id);
    set({ todos: getTodoList(response) });
  },
}));
