import React, { useState, useEffect } from 'react';

import { TodoCard } from './components';
import { useTodo } from './hook/useTodo';

const TodoContainer = () => {
  const todos = useTodo((state) => state.todos);
  const get = useTodo((state) => state.get);

  useEffect(() => {
    get();
  }, []);

  return <TodoCard todos={todos} />;
};

export default TodoContainer;
