import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Card, Icon, Text, InputText } from '../Base';

const TodoHeader = ({ total = 0, onClearItems }) => {
  const onEraserIconClick = () => {
    onClearItems();
  };

  return (
    <>
      <div>
        <Text bold color="text-emerald-600" size="text-[5rem]">
          TODAY
        </Text>
        <Text italic>{total} tasks</Text>
      </div>
      <Icon name="eraser" size={4} onClick={onEraserIconClick} pointer />
    </>
  );
};

const TodoFooter = ({ onAddNewItem }) => {
  const [task, setTask] = useState('');

  const onTextChange = (value) => {
    setTask(value);
  };

  const AddNewItem = () => {
    onAddNewItem(task);
    setTask('');
  };

  return (
    <>
      <InputText
        bold
        color="text-slate-400"
        placeholder="What we have to do?"
        value={task}
        onChange={onTextChange}
        onEnterPress={AddNewItem}
      >
        what we have to do ?
      </InputText>
      <Text bold pointer color="text-emerald-600" onClick={AddNewItem}>
        Add
      </Text>
    </>
  );
};

const TodoItem = ({ name, done, onChecked, onDelete }) => {
  const onCheckIconClick = () => {
    onChecked();
  };

  const onCrossIconClick = () => {
    onDelete();
  };

  const isDone = done;

  const iconCheck = isDone ? 'check' : 'uncheck';
  const textColor = isDone && 'text-slate-500';
  const textLineThrough = !!isDone;

  return (
    <div className="mb-[1rem] flex justify-start items-center">
      <Icon
        className="mr-[2rem] cursor-pointer"
        name={iconCheck}
        size={2.5}
        onClick={onCheckIconClick}
      />
      <Text size="text-[3rem]" lineThrough={textLineThrough} color={textColor}>
        {name}
      </Text>
      {!isDone && (
        <Icon
          className="ml-[2rem] cursor-pointer"
          name="cross"
          size={2}
          onClick={onCrossIconClick}
        />
      )}
    </div>
  );
};

const TodoCard = ({
  todos = [],
  setTodos,
  add,
  edit,
  order,
  remove,
  clear,
}) => {
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

  const total = todos.length;

  return (
    <Card
      header={() => <TodoHeader total={total} onClearItems={onClearItems} />}
      footer={() => <TodoFooter onAddNewItem={onAddNewItem} />}
    >
      <DragDropContext onDragEnd={onDropItem}>
        <Droppable droppableId="list-container">
          {(provided) => {
            return (
              <div
                className="list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((item) => (
                  <Draggable
                    key={item.id}
                    draggableId={`${item.id}`}
                    index={item.order}
                  >
                    {(provided) => {
                      return (
                        <div
                          className="item-container"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TodoItem
                            name={item.name}
                            order={item.orde}
                            done={item.done}
                            onChecked={() => onCheckItem(item.id, !item.done)}
                            onDelete={() => onDeleteItem(item.id)}
                          />
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </Card>
  );
};

export default TodoCard;
