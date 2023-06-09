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
        <Text italic>{total} Tasks</Text>
      </div>
      <Icon name="eraser" size={3} onClick={onEraserIconClick} pointer />
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
        className="p-[1rem]"
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
      <Text size="text-[2rem]" lineThrough={textLineThrough} color={textColor}>
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
  onAddNewItem,
  onDeleteItem,
  onCheckItem,
  onDropItem,
  onClearItems,
}) => {
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
