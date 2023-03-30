import css from './style.module.scss';
import boardItems from '../../data/achievementBoard.json';
import AchievementBoard from '../../common/components/UI/AchievementBoard';
import TextTitle from '../../common/components/UI/TextTitle';
import TextContent from '../../common/components/UI/TextContent';
import ButtonGoCorona from '../../common/components/UI/ButtonGoCorona';

const SectionExperts = () => {
  return (
    <section className={css['experts']}>
      <div className={css['container']}>
        <AchievementBoard className={css['board']} items={boardItems} />
        <div className={css['content']}>
          <div className={css['block-text']}>
            <TextTitle priority={2} marker="blue">
              Talk to <span>experts.</span>
            </TextTitle>
            <TextContent tag={'h3'}>
              Book appointments or submit queries into thousands of forums
              concerning health issues and prevention against noval Corona
              Virus.
            </TextContent>
            <ButtonGoCorona to="./" className={css['button']}>
              Features
            </ButtonGoCorona>
          </div>
          <div className={css['video']}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dcJDpV-igjs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionExperts;
