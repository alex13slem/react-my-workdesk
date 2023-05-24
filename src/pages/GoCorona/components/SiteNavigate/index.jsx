import styled from 'styled-components';
import Link from './Link';
import linksData from '@GoCorona/data/navLinks.json';

const Nav = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 30px;

  &.visible {
    left: 0;
  }

  @media (max-width: 991.98px) {
    margin-right: 20px;
    gap: 10px;
  }

  @media (max-width: 767.92px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 15px 30px 15px;
  }
  @media (max-width: 767.92px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #fafbfd;
    transition: left 0.3s ease;
    &:target {
      left: 0;
    }
  }
`;

const SiteNavigate = ({visible = false}) => {
  return (
    <Nav className={visible && 'visible'}>
      {linksData.map((link) => (
        <Link key={link.id} to={link.to}>
          {link.text}
        </Link>
      ))}
    </Nav>
  );
};

export default SiteNavigate;
