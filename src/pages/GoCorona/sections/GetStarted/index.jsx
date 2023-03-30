import {SVGDoctorAndGirl, SVGIconVideo} from '../../common/components/images';
import BtnTrigger from '../../common/components/UI/BtnTrigger';
import ButtonGoCorona from '../../common/components/UI/ButtonGoCorona';
import TextContent from '../../common/components/UI/TextContent';
import TextTitle from '../../common/components/UI/TextTitle';
import css from './style.module.scss';

const SectionGetStarted = () => {
  return (
    <section className={css['get-started']}>
      <div className={css['container']}>
        <div className={css['content']}>
          <div className={css['block-text']}>
            <TextTitle className={css['title']} priority={1} marker="blue">
              Take care of yours family's
              <span> health.</span>
            </TextTitle>
            <TextContent tag={'p'} className={css['text']}>
              All in one destination for COVID-19 health queries. <br /> Consult
              10,000+ health workers about your concerns.
            </TextContent>
            <ButtonGoCorona to={'./'}>GET STARTED</ButtonGoCorona>
          </div>
          <div className={css['image']}>
            <SVGDoctorAndGirl />
          </div>
        </div>
        <BtnTrigger
          title="Stay safe with GoCorona"
          description="Watch Video"
          svg={<SVGIconVideo />}
        />
      </div>
    </section>
  );
};

export default SectionGetStarted;