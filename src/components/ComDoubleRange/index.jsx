import {useState} from 'react';
import styled from 'styled-components';

const CustomRange = styled.div`
  --base-size: 15px;

  position: relative;
  height: 4px;

  /* border: 1px solid #fff; */

  .input {
    position: absolute;
    top: calc(var(--base-size) / -2);
    bottom: 0;
    height: 100%;
    width: 100%;

    padding-block: 10px;

    pointer-events: none;
    appearance: none;

    background-color: transparent;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      height: var(--base-size);
      width: var(--base-size);
      background-color: rgb(224, 112, 37);
      border-radius: 50%;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      pointer-events: all;
      height: var(--base-size);
      width: var(--base-size);
      background-color: rgb(224, 112, 37);
      border-radius: 50%;
      cursor: pointer;
    }
    &::-ms-thumb {
      appearance: none;
      pointer-events: all;
      height: var(--base-size);
      width: var(--base-size);
      background-color: rgb(224, 112, 37);
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

const ComDoubleRange = () => {
  const [value, setValue] = useState({min: 0, max: 100});

  const styledRangeBg = {
    background: `
    linear-gradient(
      to right,
      #580000 0% ${value.min}%, 
      #c00000 ${value.min}% ${value.max}%, 
      #580000 ${value.max}% 100%
    )`,
  };

  return (
    <CustomRange style={styledRangeBg}>
      <input
        className="input input_min"
        value={value.min}
        onChange={(e) => {
          setValue({...value, min: e.target.value});
        }}
        type="range"
        name="min"
      />
      <input
        className="input input_max"
        value={value.max}
        onChange={(e) => setValue({...value, max: e.target.value})}
        type="range"
        name="max"
      />
    </CustomRange>
  );
};

export default ComDoubleRange;
