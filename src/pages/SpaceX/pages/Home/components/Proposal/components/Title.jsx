import styled from 'styled-components';
import {proposalText} from '../mainCss';

const StyledTitle = styled.h1`
  ${proposalText}
  z-index: -2;
  position: relative;
  b {
    text-transform: uppercase;
    font-size: 58px;
    line-height: 1.2;
  }

  @media (max-width: 1199px) {
    z-index: 0;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    b {
      font-size: 38px;
    }
  }
`;

const Title = ({className, ...props}) => {
  return (
    <StyledTitle className={className} {...props}>
      <b>ПУТЕШЕСТВИЕ</b>
      <br />
      на красную планету
    </StyledTitle>
  );
};

export default Title;
