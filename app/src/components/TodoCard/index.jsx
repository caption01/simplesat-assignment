import React from 'react';
import { useState } from 'react';

import { Card, Icon, Text } from '../Base';

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

const TodoFooter = () => {
  return (
    <>
      <Text bold color="text-slate-400">
        what we have to do ?
      </Text>
      <Text bold color="text-emerald-600">
        Add
      </Text>
    </>
  );
};

const TodoItem = ({ name, order, done }) => {
  const [isDone, setIsDone] = useState(done);

  const onCheck = () => setIsDone(!isDone);

  const onRemove = () => {
    console.log('remove !');
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

const TodoCard = ({ todos = [] }) => {
  console.log({ todos });

  return (
    <Card header={() => <TodoHeader />} footer={() => <TodoFooter />}>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            order={item.orde}
            done={item.done}
          />
        );
      })}
    </Card>
  );
};

export default TodoCard;
