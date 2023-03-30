import css from './style.module.scss';

import mobileAppImg from '../../img/stay-safe/image.png';
import TextTitle from '../../common/components/UI/TextTitle';
import TextContent from '../../common/components/UI/TextContent';
import ButtonGoCorona from '../../common/components/UI/ButtonGoCorona';

const SectionStaySafe = () => {
  return (
    <section className={css['stay-safe']}>
      <div className={css['container']}>
        <img src={mobileAppImg} alt="Stay Safe" />
        <div className={css['text-block']}>
          <TextTitle priority={2} className={css['text-block__title']}>
            Stay safe with Go<span>Corona.</span>
          </TextTitle>
          <TextContent className={css['text-block__description']}>
            24x7 Support and user friendly mobile platform to bring healthcare
            to your fingertips. Signup and be a part of the new health culture.
          </TextContent>
          <ButtonGoCorona to={'./'}>Features</ButtonGoCorona>
        </div>
      </div>
    </section>
  );
};

export default SectionStaySafe;
