import {SVGTablet} from '@Home/UI/SVGImages/screens';
import styled from 'styled-components';
import {Screen} from './Screen';

const Root = styled.div`
  position: absolute;

  width: 17%;
  height: 29%;
  bottom: 7%;
  right: 15%;

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

const Tablet = ({className}) => {
  return (
    <Root className={className}>
      <SVGTablet className="device-frame" />
      <Screen />
    </Root>
  );
};

export default Tablet;
