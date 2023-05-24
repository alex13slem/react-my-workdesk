import {SVGSiteLogo} from '@GoCorona/UI/SVGimages';
import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const Btn = styled(ComBtn)`
  display: flex;
  align-items: center;
  z-index: 40;
  @media (max-width: 478.98px) {
    flex: 0 0 69px;
    overflow: hidden;
  }
`;

const Logo = ({className}) => {
  return (
    <Btn to={'/'} className={className}>
      <SVGSiteLogo />
    </Btn>
  );
};

export default Logo;
