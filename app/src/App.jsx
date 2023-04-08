import React from 'react';
import tw from 'tailwind-styled-components';

import TodoContainer from './TodoContainer';

const Layout = tw.div`
    w-full
    min-h-screen

    flex
    justify-center
    items-center

    bg-stone-300
`;

function App() {
  return (
    <Layout>
      <TodoContainer />
    </Layout>
  );
}

export default App;
