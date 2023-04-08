import React from 'react';
import classnames from 'classnames';

import { Eraser, Cross, Check, Uncheck } from './asset';

const asset = {
  eraser: Eraser,
  cross: Cross,
  check: Check,
  uncheck: Uncheck,
};

const Icon = ({
  name,
  size,
  pointer = false,
  className: propsClassName,
  ...props
}) => {
  const element = asset[name] || 'div';

  let classNames = classnames(propsClassName);

  if (pointer) {
    classNames = classnames(classNames, 'cursor-pointer');
  }

  return React.createElement(element, {
    size,
    className: classNames,
    ...props,
  });
};

export default Icon;
