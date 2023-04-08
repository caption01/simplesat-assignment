import React, { useEffect } from 'react';

import { TodoCard } from './components';
import { useTodo } from './hook/useTodo';

const TodoContainer = () => {
  const todoState = useTodo((state) => state);
  const { todos, get, add, order, remove } = todoState;

  useEffect(() => {
    get();
  }, []);

  return <TodoCard todos={todos} add={add} order={order} remove={remove} />;
};

export default TodoContainer;
