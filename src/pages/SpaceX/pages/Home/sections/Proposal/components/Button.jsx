import {BtnSpaceX} from '@SpaceX/UI/Buttons';
import styled from 'styled-components';

const StyledButton = styled(BtnSpaceX)`
  position: absolute;
  bottom: calc(32% + 50px);
  left: calc(50% - 585px);
  transform-origin: right;
  &:hover {
    transform: scaleX(102%) translateX(-5%);
  }

  span {
    display: block;
    position: absolute;
    content: '';
    width: 406px;
    height: 57px;
    left: 100%;
    top: 100%;
    background: url('img-space-x/arrow_start.webp') 0 0 no-repeat;
  }

  @media (max-width: 1199px) {
    position: relative;
    inset: auto;

    span {
      display: none;
    }
  }
`;

const Button = ({className, ...props}) => {
  return (
    <StyledButton glare className={className} {...props}>
      Начать путешествие
      <span></span>
    </StyledButton>
  );
};

export default Button;
