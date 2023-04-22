import styled from 'styled-components';

const StyledFieldLeftElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({align}) => (align ? align : 'center')};
`;

export const FieldSideElement = ({children, className}) => {
  return (
    <StyledFieldLeftElement className={className} align="start">
      {children}
    </StyledFieldLeftElement>
  );
};
