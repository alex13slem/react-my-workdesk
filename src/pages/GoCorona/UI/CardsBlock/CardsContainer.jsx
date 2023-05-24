import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 991.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardsContainer = ({className, children}) => {
  return <Root className={className}>{children}</Root>;
};

export default CardsContainer;
