import ComBtn from 'components/ComBtn';
import {SVGIconVideo} from '../SVGimages';
import styled from 'styled-components';

const Root = styled(ComBtn)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  & > svg {
    circle,
    path {
      transition: stroke 0.3s ease;
    }
  }
  &:hover {
    & > svg {
      circle,
      path {
        stroke: #ec5863;
      }
    }
    .title {
      color: #ec5863;
    }
  }

  .body {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .title {
    font-size: 13px;
    line-height: 126%;
    /* or 16px */
    letter-spacing: 0.08em;
    color: #b0b0b0;
  }

  .text {
    font-size: 9px;
    line-height: 126%;
    /* or 11px */
    letter-spacing: 0.165em;
    text-transform: uppercase;
    color: #000000;
  }
`;

const BtnVideoTrigger = ({children, className, ...args}) => {
  return (
    <Root className={className} {...args}>
      <SVGIconVideo />
      <div className="body">
        <p className="title">{children}</p>
        <p className="text">Watch Video</p>
      </div>
    </Root>
  );
};

export default BtnVideoTrigger;
