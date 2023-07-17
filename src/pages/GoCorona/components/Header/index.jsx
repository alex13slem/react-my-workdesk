import {useRef, useState} from 'react';
import styled from 'styled-components';
import SiteNavigate from '../SiteNavigate';
import ButtonGoCorona from '@GoCorona/UI/ButtonGoCorona';
import Logo from './Logo';
import Container from '@GoCorona/components/Container';
import Burger from '../SiteNavigate/Burger';
import {useScrollElemHide, useScrollElemOpacity} from 'hooks';

const StyledHeader = styled.header`
  z-index: 50;

  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 114px;
  @media (max-width: 991.98px) {
    min-height: 80px;
  }

  .btn-download {
    margin-left: 122px;
    @media (max-width: 991.98px) {
      margin: 0;
    }
  }
`;

const Header = ({className}) => {
  const rootRef = useRef(null);
  const rootHeight = rootRef.current?.offsetHeight;
  const [visibleMenu, setVisibleMenu] = useState(false);

  const [headerTopValue] = useScrollElemHide(rootHeight, {
    isFixed: visibleMenu,
  });

  const headerOpacity = useScrollElemOpacity(rootHeight, {maxOpacity: 90});

  return (
    <StyledHeader
      className={className}
      ref={rootRef}
      style={{
        background: `rgb(255 255 255 / ${headerOpacity}%)`,
        top: headerTopValue + 'px',
      }}
    >
      <StyledContainer>
        <Logo />
        <SiteNavigate visible={visibleMenu} />
        <ButtonGoCorona blue className="btn-download">
          DOWNLOAD
        </ButtonGoCorona>
        <Burger visible={visibleMenu} handle={setVisibleMenu} />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
