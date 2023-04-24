import styled from 'styled-components';
import {Card} from './Card';

const StyledSection = styled.section`
  position: relative;
  max-width: fit-content;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  justify-self: end;

  @media (max-width: 1199px) {
    margin-right: auto;
    margin-left: auto;
    margin-top: calc(0.4% + 11vh);
  }

  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

const CardsBlock = ({className, data}) => {
  return (
    <StyledSection className={className}>
      {data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </StyledSection>
  );
};

export default CardsBlock;
