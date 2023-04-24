import styled from 'styled-components';

const StyledWindow = styled.div`
  opacity: 0;
  .modal-enter-done > & {
    opacity: 1;
  }
  .modal-exit > & {
    opacity: 0;
  }
`;

export const Window = ({children, className}) => {
  return <StyledWindow className={className}>{children}</StyledWindow>;
};
