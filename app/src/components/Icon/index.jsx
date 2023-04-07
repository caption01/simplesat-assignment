import React from 'react';

import { Eraser, Cross } from './asset';

const asset = {
  eraser: Eraser,
  cross: Cross,
};

const Icon = ({ name, size, ...props }) => {
  const element = asset[name] || 'div';

  return React.createElement(element, {
    size,
    ...props,
  });
};

export default Icon;
