import React, { useState, useEffect } from 'react';

import App from './App';

import { useTodo } from './hook/useTodo';

const AppContainer = () => {
  const todos = useTodo((state) => state.todos);
  const get = useTodo((state) => state.get);

  useEffect(() => {
    get();
  }, []);

  return <App todos={todos} />;
};

export default AppContainer;
