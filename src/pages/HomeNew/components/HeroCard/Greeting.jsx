import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useRef, useState} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  .head {
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;
    @media (max-width: 1011.98px) {
      cursor: pointer;
    }
  }
  .angle {
    display: none;

    @media (max-width: 1011.98px) {
      display: block;
    }

    transition: transform 0.3s ease-in;
    ${({accActive}) =>
      accActive &&
      `
				transform: scale(-1)
			`}
  }
  .body {
    transition: height 0.5s linear;
    @media (max-width: 1011.98px) {
      height: 0px;
      overflow: hidden;

      &.active {
        ${({bodyHeight}) => `height: ${bodyHeight}px`}
      }
    }

    &__list {
      margin: 0 !important;
    }
    p {
      margin-bottom: 14px;

      display: flex;
      gap: 4px;
    }
    ul,
    li {
      margin-left: 16px;
    }
  }
  .line {
    display: inline-block;
    flex: 1;
    border-bottom: 1px dashed var(--color-l-grey);
  }
`;

export const Greeting = () => {
  const [accActive, setAccActive] = useState(false);
  const bodyRef = useRef(null);
  const bodyHeight = bodyRef?.current?.scrollHeight;
  return (
    <Root accActive={accActive} bodyHeight={bodyHeight}>
      <div className="head" onClick={() => setAccActive(!accActive)}>
        <h2>Обо мне</h2>
        <FontAwesomeIcon icon={faAngleDown} className="angle" />
      </div>
      <div className={`body${accActive ? ' active' : ''}`} ref={bodyRef}>
        <p>
          Занимаюсь WEB-разработкой на JavaScript. Работаю с библиотекой React.
        </p>
        <p>
          Где я:<span className="line"></span> Belarus, Homel
        </p>
        <ul className="body__list">
          Stack technologies:
          <li>
            React
            <ul>
              Routing:
              <li>React Router v6</li>
            </ul>
            <ul>
              State:
              <li>Redux Toolkit</li>
              <li>Zustand</li>
              <li>useContext</li>
            </ul>
            <ul>
              UI:
              <li>Styled Components</li>
              <li>CSS Modules (SCSS)</li>
            </ul>
            <ul>
              Another libs:
              <li>Hook Form</li>
              <li>Swiper</li>
            </ul>
          </li>
        </ul>
      </div>
    </Root>
  );
};
