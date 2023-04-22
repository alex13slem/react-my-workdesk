import styled from 'styled-components';
import {fieldCSS} from './style';
import {forwardRef} from 'react';

const StyledInput = styled.input`
  height: 2em;
  padding-inline: 0.5em;

  ${fieldCSS}
`;

export const Input = forwardRef(({className, isValid, ...props}, ref) => {
  // console.log(isValid);
  return (
    <StyledInput ref={ref} className={className} isValid={isValid} {...props} />
  );
});
