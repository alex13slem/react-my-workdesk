import TextTitle from '@GoCorona/UI/TextTitle';
import TextContent from '@GoCorona/UI/TextContent';
import ButtonGoCorona from '@GoCorona/UI/ButtonGoCorona';
import styled from 'styled-components';
import Container from '@GoCorona/components/Container';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-block: 80px;
  @media (max-width: 991.98px) {
    flex-direction: column;
    padding-block: 50px;
  }

  .text-block {
    max-width: 380px;
    margin-top: 50px;
  }
`;

const SectionStaySafe = ({className}) => {
  return (
    <section className={className}>
      <StyledContainer>
        <img src="img-go-corona/stay-safe/image.png" alt="Stay Safe" />
        <div className="text-block">
          <TextTitle priority={2}>
            Stay safe with Go<span>Corona.</span>
          </TextTitle>
          <TextContent>
            24x7 Support and user friendly mobile platform to bring healthcare
            to your fingertips. Signup and be a part of the new health culture.
          </TextContent>
          <ButtonGoCorona to={'./'}>Features</ButtonGoCorona>
        </div>
      </StyledContainer>
    </section>
  );
};

export default SectionStaySafe;
