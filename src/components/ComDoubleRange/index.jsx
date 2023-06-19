import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {setMaxLimitValue, setMinLimitValue} from 'utils/doubleRange';

const CustomRange = styled.div`
  --base-size: ${({baseSize}) => baseSize + 'px'};
  --thumb-color: ${({thumbColor}) => thumbColor};

  position: relative;
  height: var(--base-size);

  .track {
    position: absolute;
    inset: 0;
    top: calc(var(--base-size) / 3);
    width: 100%;
    height: calc(var(--base-size) / 3);
  }
  .min,
  .max {
    z-index: 1;
    position: absolute;
    inset: 0;
    height: var(--base-size);
    width: 100%;

    pointer-events: none;
    appearance: none;

    background-color: transparent;

    &::-webkit-slider-thumb {
      position: relative;
      height: var(--base-size);
      width: var(--base-size);
      -webkit-appearance: none;
      pointer-events: all;
      background-color: rgb(224, 112, 37);
      border-radius: 50%;
      cursor: pointer;

      ${({thumbCSS}) => thumbCSS.webkit}
    }
    &::-moz-range-thumb {
      position: relative;
      -moz-appearance: none;
      pointer-events: all;
      height: var(--base-size);
      width: var(--base-size);
      background-color: rgb(224, 112, 37);
      border-radius: 50%;
      cursor: pointer;

      ${({thumbCSS}) => thumbCSS.moz}
    }
    &::-ms-thumb {
      position: relative;
      appearance: none;
      pointer-events: all;
      height: var(--base-size);
      width: var(--base-size);
      background-color: #e07025;
      border-radius: 50%;
      cursor: pointer;

      ${({thumbCSS}) => thumbCSS.ms}
    }
  }
`;

const ComDoubleRange = ({
  className,
  baseSize = 16,
  colors = {
    thumb: '#e07025',
    track: {in: '#c00000', out: '#580000'},
  },
  thumbCSS = {webkit: '', moz: '', ms: ''},
  onChange = () => {},
  value,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const styledRangeBg = {
    background: `
    linear-gradient(
      to right,
      ${colors.track.out} 0% ${currentValue.min}%, 
      ${colors.track.in} ${currentValue.min}% ${currentValue.max}%, 
      ${colors.track.out} ${currentValue.max}% 100%
    )`,
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  // console.log('cvalue', currentValue);

  return (
    <CustomRange
      baseSize={baseSize}
      thumbColor={colors.thumb}
      thumbCSS={thumbCSS}
      className={className}
    >
      <div className="track" style={styledRangeBg}></div>
      <input
        value={currentValue.min}
        onChange={(e) => {
          setMinLimitValue(e, currentValue, setCurrentValue);
        }}
        onPointerUp={() => {
          onChange(currentValue);
        }}
        onTouchEnd={() => {
          onChange(currentValue);
        }}
        type="range"
        className="min"
      />
      <input
        value={currentValue.max}
        onChange={(e) => {
          setMaxLimitValue(e, currentValue, setCurrentValue);
        }}
        onPointerUp={() => {
          onChange(currentValue);
        }}
        onTouchEnd={() => {
          onChange(currentValue);
        }}
        type="range"
        className="max"
      />
    </CustomRange>
  );
};

export default ComDoubleRange;
