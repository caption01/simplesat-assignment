import tw from 'tailwind-styled-components';

import { Icon } from './components';

const Layout = tw.div`
    w-full
    min-h-screen

    flex
    justify-center
    items-center
`;

const Hello = tw.div`
  text-blue-600
  text-5xl
  ${(p) => p.$bold && 'font-bold'}
`;

function App() {
  return (
    <Layout>
      <Hello $bold>Hello world!</Hello>
      <Icon name="eraser" size={24} />
      <Icon name="cross" size={24} />
    </Layout>
  );
}

export default App;
