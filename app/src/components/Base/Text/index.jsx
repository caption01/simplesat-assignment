import tw from 'tailwind-styled-components';

const StyledDiv = tw.div`
  ${(p) => p.$color}
  ${(p) => p.$size}
  ${(p) => p.$bold && 'font-bold'}
  ${(p) => p.$italic && 'italic'}
  ${(p) => p.$lineThrough && 'line-through'}
`;

const Text = ({
  color = 'text-black',
  size = 'text-[2rem]',
  bold = false,
  italic = false,
  lineThrough = false,
  ...props
}) => {
  return (
    <StyledDiv
      $color={color}
      $size={size}
      $bold={bold}
      $italic={italic}
      $lineThrough={lineThrough}
      {...props}
    />
  );
};

export default Text;
