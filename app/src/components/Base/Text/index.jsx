import tw from 'tailwind-styled-components';

const StyledDiv = tw.div`
  ${(p) => p.$color}
  ${(p) => p.$size}
  ${(p) => p.$bold && 'font-bold'}
  ${(p) => p.$italic && 'italic'}
`;

const Text = ({
  color = 'text-black',
  size = 'text-[2rem]',
  bold = false,
  italic = false,
  ...props
}) => {
  return (
    <StyledDiv
      $color={color}
      $size={size}
      $bold={bold}
      $italic={italic}
      {...props}
    />
  );
};

export default Text;
