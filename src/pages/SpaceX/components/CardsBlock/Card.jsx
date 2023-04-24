import HTMLReactParser from 'html-react-parser';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  min-height: 185px;
  min-width: 185px;

  text-align: center;
  cursor: pointer;

  border-style: none;
  border-width: 1px;
  border-image-source: linear-gradient(
    0deg,
    transparent 0%,
    transparent 50%,
    transparent 100%
  );
  border-image-slice: 1;

  transition: border-image-source 0.3s ease;

  &:nth-child(1) {
    background: radial-gradient(
      circle at 0% 0%,
      rgba(255, 255, 0, 0) 65%,
      rgba(255, 255, 255, 0.5) 220%
    );
  }
  &:nth-child(2) {
    background: radial-gradient(
      circle at 100% 0%,
      rgba(255, 255, 0, 0) 65%,
      rgba(255, 255, 255, 0.5) 220%
    );
  }
  &:nth-child(3) {
    background: radial-gradient(
      circle at 0% 100%,
      rgba(255, 255, 0, 0) 65%,
      rgba(255, 255, 255, 0.5) 220%
    );
  }
  &:nth-child(4) {
    background: radial-gradient(
      circle at 100% 100%,
      rgba(255, 255, 0, 0) 65%,
      rgba(255, 255, 255, 0.5) 220%
    );
    .second-line,
    .third-line {
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(
        317deg,
        #0000006e 0%,
        #ffffff 80%,
        #ffffff 100%
      );
    }
  }
  &:hover {
    &:nth-child(1) {
      border-style: none solid solid none;
      border-image-source: linear-gradient(
        315deg,
        rgba(255, 255, 255, 0.65) 0%,
        transparent 50%,
        transparent 100%
      );
    }
    &:nth-child(2) {
      border-style: none none solid solid;
      border-image-source: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.65) 0%,
        transparent 50%,
        transparent 100%
      );
    }
    &:nth-child(3) {
      border-style: solid solid none none;
      border-image-source: linear-gradient(
        225deg,
        rgba(255, 255, 255, 0.65) 0%,
        transparent 50%,
        transparent 100%
      );
    }
    &:nth-child(4) {
      border-style: solid none none solid;
      border-image-source: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.65) 0%,
        transparent 50%,
        transparent 100%
      );
    }
  }

  .first-line {
    font-size: 16px;
    line-height: 1em;
    font-weight: 100;
    color: #fff;
    white-space: nowrap;
  }
  .second-line {
    font-size: 60px;
    line-height: 0.9em;
    font-weight: 700;
    white-space: nowrap;

    span {
      font-size: 18px;
      line-height: 1em;
      font-weight: 400;
    }
  }
  .third-line {
    font-weight: 100;
    font-size: 18px;
    line-height: 1em;
    white-space: nowrap;
  }

  @media (max-width: 1199px) {
    &:nth-child(4) {
      .second-line,
      .third-line {
        color: #fff;
      }
    }
  }

  @media (max-width: 500px) {
    min-height: 135px;
    min-width: 135px;

    .second-line {
      font-size: 32px;
    }
  }
`;

export const Card = ({className, data}) => {
  return (
    <StyledCard className={className}>
      <p className="first-line">{HTMLReactParser(data['first-str'])}</p>
      <p className="second-line">{HTMLReactParser(data['second-str'])}</p>
      <p className="third-line">{HTMLReactParser(data['third-str'])}</p>
    </StyledCard>
  );
};
