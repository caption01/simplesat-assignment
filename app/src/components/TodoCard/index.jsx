import React from 'react';
import { useState } from 'react';

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

const TodoItem = ({ name, order, done, onChecked, onDelete }) => {
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

const TodoCard = ({ todos = [], add, edit, order, remove, clear }) => {
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

  const total = todos.length;

  return (
    <Card
      header={() => <TodoHeader total={total} onClearItems={onClearItems} />}
      footer={() => <TodoFooter onAddNewItem={onAddNewItem} />}
    >
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            order={item.orde}
            done={item.done}
            onChecked={() => onCheckItem(item.id, !item.done)}
            onDelete={() => onDeleteItem(item.id)}
          />
        );
      })}
    </Card>
  );
};

export default TodoCard;
