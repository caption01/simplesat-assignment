import tw from 'tailwind-styled-components';

import { Icon } from './components';

const Hello = tw.div`
  text-blue-600
  text-5xl
  ${(p) => p.$bold && 'font-bold'}
`;

function App() {
  return (
    <div>
      <Hello $bold>Hello world!</Hello>
      <Icon name="eraser" size={24} />
      <Icon name="cross" size={24} />
    </div>
  );
}

export default App;
