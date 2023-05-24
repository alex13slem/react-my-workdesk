import styled from 'styled-components';

const Root = styled.article`
  z-index: 1;
  position: relative;

  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  padding: 30px 80px;

  background-color: #ffffff;
  box-shadow: 0px 2px 24px rgba(88, 126, 236, 0.15);
  border-radius: 16px;

  @media (max-width: 767.98px) {
    box-shadow: 0px 2px 24px rgba(88, 126, 236, 0.15), #ec5863 20px -15px;
    border-radius: 30px;
  }
  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0;
    padding: 20px 34px;
  }

  .item {
    font-weight: 700;
    @media (max-width: 991.98px) {
      margin-bottom: 10px;
    }
  }

  .value {
    text-align: center;
    font-size: 36px;
    letter-spacing: 0.14em;
    color: #ec5863;
  }

  .title {
    text-align: center;
    font-size: 11px;
    letter-spacing: 0.37em;
    text-transform: uppercase;
    color: #000000;
  }
`;

const Board = ({className, items}) => {
  return (
    <Root className={className}>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <p className="value">{item.firStr}</p>
          <p className="title">{item.secStr}</p>
        </div>
      ))}
    </Root>
  );
};

export default Board;
