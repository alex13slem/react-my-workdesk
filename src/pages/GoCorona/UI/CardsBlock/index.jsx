import ComImage from 'components/ComImage';
import styled from 'styled-components';
import CardsContainer from './CardsContainer';
import Card from './Card';

const Root = styled.div`
  position: relative;
`;

const StyledCard = styled(Card)`
  .image {
    width: 72px;
    margin-bottom: 58px;
  }

  .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 138.5%;
    /* or 22px */
    text-align: center;
    letter-spacing: 0.08em;
    color: #000000;
  }

  .text {
    /* width: 86%; */
    line-height: 138.5%;
    /* or 17px */
    text-align: center;
    letter-spacing: 0.08em;
    color: #616161;
  }
`;

const CardsBlock = ({className, data = [], decor}) => {
  return (
    <Root className={className}>
      <CardsContainer>
        {data.map(({id, img, title, body}) => (
          <StyledCard key={id}>
            <ComImage src={img} className="image" />
            <div className="title">{title}</div>
            <div className="text">{body}</div>
          </StyledCard>
        ))}
      </CardsContainer>
      {decor}
    </Root>
  );
};

export default CardsBlock;
