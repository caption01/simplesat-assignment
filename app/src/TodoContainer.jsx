import React, { useEffect } from 'react';

import { TodoCard } from './components';
import { useTodo } from './hook/useTodo';

const TodoContainer = () => {
  const todoState = useTodo((state) => state);
  const { todos, setTodos, get, edit, add, order, remove, clear } = todoState;

  useEffect(() => {
    get();
  }, []);

  return (
    <TodoCard
      todos={todos}
      setTodos={setTodos}
      add={add}
      edit={edit}
      order={order}
      remove={remove}
      clear={clear}
    />
  );
};

export default TodoContainer;
