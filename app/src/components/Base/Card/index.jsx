import tw from 'tailwind-styled-components';

const Container = tw.div`
  relative
  flex
  flex-col
  justify-start
  items-center
  bg-white
  pt-[2rem]
  px-[3rem]
  rounded-[2rem]
  min-w-[40rem]
`;

const HeaderContainer = tw.div`
  flex
  justify-between
  items-center
  w-full
  pb-[3rem]
`;

const BodyContainer = tw.div`
  flex-grow
  min-h-[40rem]
  py-[2rem]
  w-full
`;

const FooterContainer = tw.div`
  flex
  justify-between
  items-center
  absolute
  w-full

  bottom-0
  left-0
  bg-gray-100
  p-[3rem]
  rounded-b-[2rem]
`;

const Header = ({ header }) => {
  return <HeaderContainer>{header()}</HeaderContainer>;
};

const Footer = ({ footer }) => {
  return <FooterContainer>{footer()}</FooterContainer>;
};

const Card = ({ header, footer, children }) => {
  return (
    <Container>
      {header && <Header header={header} />}
      <BodyContainer>{children}</BodyContainer>
      {footer && <Footer footer={footer} />}
    </Container>
  );
};

Card.Header = Header;
Card.Footer = Footer;

export default Card;
