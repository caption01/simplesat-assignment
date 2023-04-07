import tw from 'tailwind-styled-components';

import { Card, Icon } from '../index';

const Title = tw.div`
  text-emerald-600
  text-[5rem]
  font-bold
`;

const Text = tw.div`
  text-[2rem]
`;

const TodoHeader = () => {
  return (
    <>
      <div>
        <Title $bold>TODAY</Title>
        <Text>5 tasks</Text>
      </div>
      <Icon name="eraser" size={4} />
    </>
  );
};

const TodoFooter = () => {
  return (
    <>
      <div>what we have to do ?</div>
      <Icon name="cross" size={4} />
    </>
  );
};

const TodoCard = () => {
  return (
    <Card header={() => <TodoHeader />} footer={() => <TodoFooter />}>
      i am body
    </Card>
  );
};

export default TodoCard;
