import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const StyledCrumb = styled(ComBtn)`
  display: inline-block;
  padding: 4px 8px;
  color: white;
  background-color: #00000050;
  border-radius: 8px;
  border: 1px solid #ffffff24;
  transition: 0.3s ease;
  transition-property: color;

  &:hover {
    color: #d3d3d3;
  }
`;

export const Crumb = ({children, className}) => {
  return <StyledCrumb>{children}</StyledCrumb>;
};
