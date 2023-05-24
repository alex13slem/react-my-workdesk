import styled from 'styled-components';

const Root = styled.article`
  flex: 0 0 280px;
  min-width: 280px;
  min-height: 280px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(88, 126, 236, 0.18);
  border-radius: 8px;
  @media (max-width: 991.98px) {
    margin-bottom: 50px;
  }
  @media (max-width: 767.98px) {
    box-shadow: 0px 2px 24px rgba(88, 126, 236, 0.15), #ec5863 20px -15px;
    border-radius: 30px;
  }
`;

const Card = ({className, children}) => {
  return <Root className={className}>{children}</Root>;
};

export default Card;
