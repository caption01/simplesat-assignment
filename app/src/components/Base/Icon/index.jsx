import React from 'react';

import { Eraser, Cross, Check, Uncheck } from './asset';

const asset = {
  eraser: Eraser,
  cross: Cross,
  check: Check,
  uncheck: Uncheck,
};

const Icon = ({ name, size, ...props }) => {
  const element = asset[name] || 'div';

  return React.createElement(element, {
    size,
    ...props,
  });
};

export default Icon;
