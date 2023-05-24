import TextTitle from '@GoCorona/UI/TextTitle';
import TextContent from '@GoCorona/UI/TextContent';
import ButtonGoCorona from '@GoCorona/UI/ButtonGoCorona';
import {SVGDoctorAndGirl} from '@GoCorona/UI/SVGimages';
import BtnVideoTrigger from '@GoCorona/UI/BtnVideoTrigger';
import styled from 'styled-components';
import Container from '@GoCorona/components/Container';

const Section = styled.section`
  background: #fafbfd;
`;

const StyledContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 50px;
  position: relative;
  display: grid;
  grid-template-areas:
    'c i'
    'v v';

  &::before {
    position: absolute;
    content: '';
    background: #ec5863;
    border-radius: 30px 0px 0px 30px;
    width: 100vw;
    height: 100%;
    top: 0;
    right: 275px;
    transform: translate(100%);
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .content {
    z-index: 2;
    position: relative;
    margin-top: 90px;
    grid-area: c;
  }

  .image {
    z-index: 1;
    grid-area: i;

    @media (max-width: 991.98px) {
      position: absolute;
      opacity: 0.3;
      right: 0;
      top: 0;
    }
  }

  .video-trigger {
    margin-top: 60px;
    grid-area: v;
  }
`;

const SectionGetStarted = ({className}) => {
  return (
    <Section className={className}>
      <StyledContainer>
        <div className="content">
          <TextTitle priority={1} marker="blue">
            Take care of yours family's
            <span> health.</span>
          </TextTitle>
          <TextContent tag={'p'}>
            All in one destination for COVID-19 health queries. <br /> Consult
            10,000+ health workers about your concerns.
          </TextContent>
          <ButtonGoCorona to={'./'}>GET STARTED</ButtonGoCorona>
        </div>
        <SVGDoctorAndGirl className="image" />
        <BtnVideoTrigger className="video-trigger">
          Stay safe with GoCorona
        </BtnVideoTrigger>
      </StyledContainer>
    </Section>
  );
};

export default SectionGetStarted;
