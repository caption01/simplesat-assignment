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

const TodoItem = () => {
  return (
    <div className="mb-[1rem]">
      <Text size="text-[3rem]">i am body</Text>
    </div>
  );
};

const TodoCard = () => {
  return (
    <Card header={() => <TodoHeader />} footer={() => <TodoFooter />}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Card>
  );
};

export default TodoCard;
