import React, { useState, useCallback } from 'react';
import tw from 'tailwind-styled-components';

const StyledInput = tw.input`
  ${(p) => p.$color}
  ${(p) => p.$size}
  ${(p) => p.$bold && 'font-bold'}
  ${(p) => p.$italic && 'italic'}
  ${(p) => p.$lineThrough && 'line-through'}

  bg-inherit
`;

const InputText = ({
  color = 'text-black',
  size = 'text-[2rem]',
  bold = false,
  italic = false,
  lineThrough = false,
  initialValue = '',
  value = '',
  placeholder = '',
  onChange,
  children,
  ...props
}) => {
  const onInputChange = useCallback((e) => {
    const value = e.target.value;
    onChange?.(value);
  }, []);

  return (
    <StyledInput
      $color={color}
      $size={size}
      $bold={bold}
      $italic={italic}
      $lineThrough={lineThrough}
      initialValue={initialValue}
      value={value}
      placeholder={placeholder}
      onChange={onInputChange}
      {...props}
    />
  );
};

export default InputText;
