import { useState } from 'react';

import App from './App';

const AppContainer = () => {
  const [todo, setTodo] = useState([]);

  return <App />;
};

export default AppContainer;
