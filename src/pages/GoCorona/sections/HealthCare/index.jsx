import css from './style.module.scss';

import cardsData from '@GoCorona/data/cardsBlock.json';

import {SVGDoctor, SVGHealthMan} from '@GoCorona/UI/SVGimages/CardsImages';
import TextTitle from '@GoCorona/UI/TextTitle';
import TextContent from '@GoCorona/UI/TextContent';
import CardsBlock, {setCardDataById} from '@GoCorona/UI/CardsBlock';

const SectionHealthCare = () => {
  const cardsId = {first: 1, second: 2, third: 3};
  setCardDataById(cardsData, cardsId.first).img = <SVGHealthMan />;
  setCardDataById(cardsData, cardsId.second).img = <SVGDoctor />;
  setCardDataById(cardsData, cardsId.third).img =
    'img-go-corona/healthcare-heart.png';
  return (
    <section className={css['root']}>
      <div className={css['container']}>
        <div className={css['text-block']}>
          <TextTitle priority={2} marker="red">
            <span>Healthcare</span> at your Fingertips.
          </TextTitle>
          <TextContent className={css['text-block__description']}>
            Bringing premium healthcare features to your fingertips. User
            friendly mobile platform to bring healthcare to your fingertips.
            Signup and be a part of the new health culture.
          </TextContent>
        </div>
        <CardsBlock data={[...cardsData]} />
      </div>
    </section>
  );
};

export default SectionHealthCare;
