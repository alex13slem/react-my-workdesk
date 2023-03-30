import css from './style.module.scss';

import cardsJSON from '../../data/cardsBlock.json';
import {
  SVGDoctor,
  SVGHealthMan,
} from '../../common/components/images/CardsImages';
import PNGHeart from '../../img/healthcare-heart.png';
import CardsBlock, {
  setCardDataById,
} from '../../common/components/UI/CardsBlock';
import TextContent from '../../common/components/UI/TextContent';
import TextTitle from '../../common/components/UI/TextTitle';

const SectionHealthCare = () => {
  const cardsId = {first: 1, second: 2, third: 3};
  const cardsData = [...cardsJSON];
  setCardDataById(cardsData, cardsId.first).img = <SVGHealthMan />;
  setCardDataById(cardsData, cardsId.second).img = <SVGDoctor />;
  setCardDataById(cardsData, cardsId.third).img = PNGHeart;
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
        <CardsBlock data={cardsData} />
      </div>
    </section>
  );
};

export default SectionHealthCare;
