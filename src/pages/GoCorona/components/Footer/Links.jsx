import {SVGAppleLogo, SVGGoogleLogo} from '@GoCorona/UI/SVGimages/FirmLogos';
import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 55px;
  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

const Links = () => {
  return (
    <Root>
      <ComBtn>
        <SVGGoogleLogo />
      </ComBtn>
      <ComBtn>
        <SVGAppleLogo />
      </ComBtn>
    </Root>
  );
};

export default Links;
