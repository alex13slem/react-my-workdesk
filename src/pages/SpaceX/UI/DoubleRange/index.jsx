import ComDoubleRange from 'comComponents/ComDoubleRange';
import {useState} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    font-size: 20px;
    font-weight: 400;
  }

  .block-value {
    display: flex;
    justify-content: space-around;
  }
  .value {
    input {
      margin-left: 12px;
      width: 64px;
      height: 32px;

      padding-inline: 8px;

      appearance: none;

      font-size: 16px;
      line-height: 1;
      color: #fafafa;

      outline: none;

      background-color: rgba(21, 10, 1, 0.21);
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(
        189deg,
        rgb(102, 38, 38) 20%,
        rgb(61, 9, 9) 40%,
        rgb(45, 17, 17) 61%,
        rgb(156, 35, 35) 79%
      );
      border-image-slice: 1;

      transition: border-image-source 0.3s ease-in-out;

      &:focus {
        border-image-source: linear-gradient(
          300deg,
          rgb(102, 38, 38) 20%,
          rgb(61, 9, 9) 40%,
          rgb(45, 17, 17) 61%,
          rgb(156, 35, 35) 79%
        );
      }
    }
  }
`;

const DoubleRange = ({title = 'Заголовок'}) => {
  const [sliderValue, setSliderValue] = useState({min: 0, max: 100});

  const setLimitedValue = (e, baseSize = 16) => {
    const LIMIT = Math.floor(baseSize / 3);

    if (isNaN(+e.target.value)) return;

    switch (e.target.name) {
      case 'min':
        sliderValue.max - +e.target.value <= LIMIT
          ? setSliderValue({...sliderValue, min: sliderValue.max - LIMIT})
          : setSliderValue({...sliderValue, min: +e.target.value});
        break;
      case 'max':
        +e.target.value - sliderValue.min <= LIMIT
          ? setSliderValue({...sliderValue, max: sliderValue.min + LIMIT})
          : setSliderValue({...sliderValue, max: +e.target.value});
        break;
      default:
        null;
    }
  };

  return (
    <Root>
      <h2 className="title">{title}</h2>
      <ComDoubleRange
        className="slider"
        setValue={setLimitedValue}
        value={sliderValue}
      />
      <div className="block-value">
        <div className="value">
          от
          <input
            type="text"
            name="min"
            value={sliderValue.min}
            onInput={setLimitedValue}
            // onKeyDown={(e) => e.key === 'Enter' && setLimitedValue(e)}
          />
        </div>
        <div className="value">
          до
          <input
            type="text"
            name="max"
            value={sliderValue.max}
            onInput={setLimitedValue}
            // onKeyDown={(e) => e.key === 'Enter' && setLimitedValue(e)}
          />
        </div>
      </div>
    </Root>
  );
};

export default DoubleRange;
