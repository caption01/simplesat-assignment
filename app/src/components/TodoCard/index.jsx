import React from 'react';
import { useState } from 'react';

import { Card, Icon, Text, InputText } from '../Base';

const TodoHeader = () => {
  return (
    <>
      <div>
        <Text bold color="text-emerald-600" size="text-[5rem]">
          TODAY
        </Text>
        <Text italic>5 tasks</Text>
      </div>
      <Icon name="eraser" size={4} />
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
      <Text bold color="text-emerald-600" onClick={AddNewItem}>
        Add
      </Text>
    </>
  );
};

const TodoItem = ({ name, order, done, onDelete }) => {
  const [isDone, setIsDone] = useState(done);

  const onCheck = () => setIsDone(!isDone);

  const onRemove = () => {
    onDelete();
  };

  const icon = isDone ? 'check' : 'uncheck';
  const color = isDone && 'text-slate-500';
  const lineThrough = !!isDone;

  return (
    <div className="mb-[1rem] flex justify-start items-center">
      <Icon
        className="mr-[2rem] cursor-pointer"
        name={icon}
        size={2.5}
        onClick={onCheck}
      />
      <Text size="text-[3rem]" lineThrough={lineThrough} color={color}>
        {name}
      </Text>
      {!isDone && (
        <Icon
          className="ml-[2rem] cursor-pointer"
          name="cross"
          size={2}
          onClick={onRemove}
        />
      )}
    </div>
  );
};

const TodoCard = ({ todos = [], add, order, remove }) => {
  const onAddNewItem = (task) => {
    add(task);
  };

  return (
    <Card
      header={() => <TodoHeader />}
      footer={() => <TodoFooter onAddNewItem={onAddNewItem} />}
    >
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            order={item.orde}
            done={item.done}
            onDelete={() => remove(item.id)}
          />
        );
      })}
    </Card>
  );
};

export default TodoCard;
