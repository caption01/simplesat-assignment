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

const TodoItem = ({ done }) => {
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
        i am body
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

const TodoCard = () => {
  return (
    <Card header={() => <TodoHeader />} footer={() => <TodoFooter />}>
      <TodoItem done />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Card>
  );
};

export default TodoCard;
