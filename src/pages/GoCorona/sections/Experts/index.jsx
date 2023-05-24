import AchievementBoard from '@GoCorona/UI/AchievementBoard';
import TextTitle from '@GoCorona/UI/TextTitle';
import TextContent from '@GoCorona/UI/TextContent';
import ButtonGoCorona from '@GoCorona/UI/ButtonGoCorona';
import boardItems from '@GoCorona/data/achievementBoard.json';
import styled from 'styled-components';
import Container from '@GoCorona/components/Container';
import {DecorItem} from '@GoCorona/UI';

const Section = styled.section`
  background: #fafbfd;
`;

const StyledContainer = styled(Container)`
  padding-block: 110px;

  display: grid;
  grid-template-areas:
    'brd brd'
    'txt vid';
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
    padding-block: 80px;
  }

  .board {
    /* margin-bottom: 80px; */
    grid-area: brd;
  }

  .block-text {
    grid-area: txt;
    max-width: 365px;
    @media (max-width: 991.98px) {
      margin-bottom: 56px;
    }
  }

  .video {
    grid-area: vid;

    width: 522px;
    height: 284px;
    object-fit: cover;
    @media (max-width: 560px) {
      width: 360px;
      height: 200px;
    }
  }
`;

const StyledDecorItem = styled(DecorItem)`
  &.el1 {
    transform: rotate(-30deg);
    bottom: 26px;
    left: 28px;

    @media (max-width: 767.98px) {
      display: none;
    }
  }
  &.el2 {
    right: calc(50% + 16px);
    top: 6px;
    transform: rotate(105deg);

    @media (max-width: 991.98px) {
      right: 16px;
    }

    @media (max-width: 767.98px) {
      display: none;
    }
  }
  &.el3 {
    right: 12px;
    top: calc(var(--size) - 50% + 16px);
    transform: rotate(-30deg);

    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

const SectionExperts = ({className}) => {
  return (
    <Section className={className}>
      <StyledContainer>
        <AchievementBoard
          className="board"
          items={boardItems}
          decor={
            <>
              <StyledDecorItem className="el1" size="65px" />
              <StyledDecorItem className="el2" size="97px" />
              <StyledDecorItem className="el3" size="128px" />
            </>
          }
        />

        <div className="block-text">
          <TextTitle priority={2} marker="blue">
            Talk to <span>experts.</span>
          </TextTitle>
          <TextContent tag={'h3'}>
            Book appointments or submit queries into thousands of forums
            concerning health issues and prevention against noval Corona Virus.
          </TextContent>
          <ButtonGoCorona to="./">Features</ButtonGoCorona>
        </div>
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dcJDpV-igjs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </StyledContainer>
    </Section>
  );
};

export default SectionExperts;
