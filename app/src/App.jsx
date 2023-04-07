import tw from 'tailwind-styled-components';

import { Icon, Card } from './components';

const Layout = tw.div`
    w-full
    min-h-screen

    flex
    justify-center
    items-center

    bg-stone-300
`;

const Hello = tw.div`
  text-blue-600
  text-5xl
  ${(p) => p.$bold && 'font-bold'}
`;

function App() {
  const header = () => {
    return (
      <>
        <Hello $bold>Hello world!</Hello>
        <Icon name="eraser" size={24} />
      </>
    );
  };

  const footer = () => {
    return (
      <>
        <div>what we have to do ?</div>
        <Icon name="cross" size={24} />
      </>
    );
  };
  return (
    <Layout>
      <Card header={() => header()} footer={() => footer()}>
        i am body
      </Card>
    </Layout>
  );
}

export default App;
