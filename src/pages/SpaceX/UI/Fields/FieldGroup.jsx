import styled, {ThemeProvider} from 'styled-components';
import {borderCSS} from './style';

const groupTheme = {
  backgroundColor: 'rgba(21, 10, 1, 0.21)',
  fontSize: '18px',
  borderStyle: 'solid',
};

const StyledFieldGroup = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;

  font-size: ${({theme}) => theme.fontSize};
  background-color: ${({theme}) => theme.backgroundColor};
  border-style: ${({theme}) => theme.borderStyle};

  ${borderCSS}
`;

export const FieldGroup = ({children, className, isValid}) => {
  return (
    <ThemeProvider theme={groupTheme}>
      <StyledFieldGroup className={className} isValid={isValid}>
        {children}
      </StyledFieldGroup>
    </ThemeProvider>
  );
};
