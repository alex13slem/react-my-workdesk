import {SVGPhone} from '@Home/UI/SVGImages/screens';
import styled from 'styled-components';
import {Screen} from './Screen';

const Root = styled.div`
  z-index: 1;
  position: absolute;
  width: 10%;
  height: 23%;
  bottom: 6%;
  right: 29%;

  pointer-events: none;

  @media (hover: none) {
    display: none;
  }

  transition: 0.5s 0.3s ease;

  .device-frame {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const Phone = ({className}) => {
  return (
    <Root className={className}>
      <SVGPhone className="device-frame" />
      <Screen />
    </Root>
  );
};

export default Phone;
