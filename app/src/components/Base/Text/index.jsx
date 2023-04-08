import React from 'react';
import tw from 'tailwind-styled-components';

const StyledDiv = tw.div`
  ${(p) => p.$color}
  ${(p) => p.$size}
  ${(p) => p.$bold && 'font-bold'}
  ${(p) => p.$italic && 'italic'}
  ${(p) => p.$lineThrough && 'line-through'}
  ${(p) => p.$pointer && 'cursor-pointer'}
`;

const Text = ({
  color = 'text-black',
  size = 'text-[2rem]',
  bold = false,
  italic = false,
  lineThrough = false,
  pointer = false,
  ...props
}) => {
  return (
    <StyledDiv
      $color={color}
      $size={size}
      $bold={bold}
      $italic={italic}
      $lineThrough={lineThrough}
      $pointer={pointer}
      {...props}
    />
  );
};

export default Text;
