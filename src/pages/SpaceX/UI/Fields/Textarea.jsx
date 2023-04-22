import styled from 'styled-components';
import {fieldCSS} from './style';
import {forwardRef} from 'react';

const StyledTextarea = styled.textarea`
  padding: 0.5em;
  resize: none;
  ${fieldCSS}
`;

export const Textarea = forwardRef(({className, isValid, ...props}, ref) => {
  return (
    <StyledTextarea
      ref={ref}
      className={className}
      isValid={isValid}
      {...props}
    />
  );
});
