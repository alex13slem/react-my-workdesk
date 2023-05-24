import styled from 'styled-components';

import cardsDataJSON from '@GoCorona/data/cardsBlock.json';

import {SVGDoctor, SVGHealthMan} from '@GoCorona/UI/SVGimages/CardsImages';
import TextTitle from '@GoCorona/UI/TextTitle';
import TextContent from '@GoCorona/UI/TextContent';
import CardsBlock from '@GoCorona/UI/CardsBlock';
import Container from '@GoCorona/components/Container';
import {DecorItem} from '@GoCorona/UI';

const StyledContainer = styled(Container)`
  padding-block: 80px;

  .title {
    text-align: center;
  }
  .description {
    margin: 14px auto 0;
    max-width: 600px;
    text-align: center;
  }
  .cards-block {
    margin-top: 45px;
  }
`;

const StyledDecorItem = styled(DecorItem)`
  &.el1 {
    left: 15px;
    bottom: -35px;
    transform: rotate(-30deg);

    @media (max-width: 1087px) {
      left: -20px;
    }
    @media (max-width: 991.98px) {
      top: -20px;
      left: 185px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  &.el2 {
    left: 265px;
    bottom: 130px;
    transform: rotate(105deg);
    @media (max-width: 1087px) {
      left: 230px;
    }
    @media (max-width: 991.98px) {
      top: 285px;
      left: 450px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  &.el3 {
    left: 618px;
    bottom: -10px;
    transform: rotate(-30deg);
    @media (max-width: 1087px) {
      left: 560px;
    }
    @media (max-width: 991.98px) {
      bottom: 295px;
      left: 145px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  &.el4 {
    right: 20px;
    bottom: 240px;
    transform: rotate(-30deg);
    @media (max-width: 1087px) {
      right: -20px;
    }
    @media (max-width: 991.98px) {
      bottom: 35px;
      right: 180px;
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

const cardsImg = [
  {id: 1, img: <SVGHealthMan />},
  {id: 2, img: <SVGDoctor />},
  {id: 3, img: 'img-go-corona/healthcare-heart.png'},
];

const SectionHealthCare = ({className}) => {
  const cardsData = [...cardsDataJSON].map((el) => {
    const cardImg = cardsImg.filter((img) => img.id === el.id)[0].img;
    return {...el, img: cardImg};
  });
  return (
    <section className={className}>
      <StyledContainer>
        <TextTitle className={'title'} priority={2} marker="red">
          <span>Healthcare</span> at your Fingertips.
        </TextTitle>
        <TextContent className={'description'}>
          Bringing premium healthcare features to your fingertips. User friendly
          mobile platform to bring healthcare to your fingertips. Signup and be
          a part of the new health culture.
        </TextContent>
        <CardsBlock
          className="cards-block"
          data={cardsData}
          decor={
            <>
              <StyledDecorItem className={'el1'} size={'66px'} />
              <StyledDecorItem className={'el2'} size="97px" />
              <StyledDecorItem className={'el3'} size={'128px'} />
              <StyledDecorItem className={'el4'} size={'66px'} />
            </>
          }
        />
      </StyledContainer>
    </section>
  );
};

export default SectionHealthCare;
