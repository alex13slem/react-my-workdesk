import {SVGDoneInfo, SVGErrorInfo} from '@SpaceX/UI/SVGImages';
import {useState} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  flex: 0 0 auto;
  width: 36px;
  height: 36px;

  padding: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    flex: 1;
    height: 80%;
    width: 80%;
  }
`;

const Alert = styled.p`
  opacity: 0;
  pointer-events: none;

  position: absolute;
  bottom: calc(100% + 6px);
  right: 6px;
  width: 200px;

  padding: 5px 10px;

  text-align: initial;
  font-size: 14px;

  background: #faebd7db;

  transition: 0.3s ease;
  transition-property: opacity;

  ${({active}) =>
    active &&
    `
  opacity: 1;
  pointer-events: all;
  `}
`;

export const AlertBtn = ({message, className, ...props}) => {
  const [alertActive, setAlertActive] = useState(false);

  return (
    <Button
      type="button"
      className={className}
      onClick={() => setAlertActive(!alertActive)}
      onBlur={() => setAlertActive(false)}
      {...props}
    >
      {(!!message && <SVGErrorInfo />) || <SVGDoneInfo />}
      <Alert active={alertActive}>{message || 'Всё правильно!'}</Alert>
    </Button>
  );
};
