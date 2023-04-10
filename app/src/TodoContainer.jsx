import React, { useEffect } from 'react';

import { TodoCard } from './components';
import { useTodo } from './hook/useTodo';

const TodoContainer = () => {
  const todoState = useTodo((state) => state);
  const { todos, setTodos, get, edit, add, order, remove, clear } = todoState;

  useEffect(() => {
    get();
  }, []);

  const onAddNewItem = (task) => {
    add(task);
  };

  const onDeleteItem = (id) => {
    remove(id);
  };

  const onCheckItem = (id, status) => {
    edit(id, status);
  };

  const onClearItems = () => {
    clear();
  };

  const onDropItem = (droppedItem) => {
    const { draggableId, source, destination } = droppedItem;

    const target = todos.find((item) => `${item.id}` === draggableId);

    const id = target.id;
    const fromOrder = source.index;
    const toOrder = destination.index;

    const todoLists = todos.filter((item) => item.id !== target.id);
    todoLists.splice(toOrder - 1, 0, target);

    const newTodos = todoLists.map((i, index) => ({ ...i, order: index + 1 }));

    // sync set locally new todo state to handle flicker UI
    setTodos(newTodos);

    // then confirm order from api
    order(id, { from: fromOrder, to: toOrder });
  };

  return (
    <TodoCard
      todos={todos}
      onAddNewItem={onAddNewItem}
      onDeleteItem={onDeleteItem}
      onCheckItem={onCheckItem}
      onDropItem={onDropItem}
      onClearItems={onClearItems}
    />
  );
};

export default TodoContainer;
