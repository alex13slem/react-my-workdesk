import styled from 'styled-components';
import Links from './Links';
import Container from '@GoCorona/components/Container';

const StyledContainer = styled(Container)`
  min-height: 100px;
  padding-bottom: 50px;
`;

const Footer = () => {
  return (
    <footer>
      <StyledContainer>
        <Links />
      </StyledContainer>
    </footer>
  );
};

export default Footer;
