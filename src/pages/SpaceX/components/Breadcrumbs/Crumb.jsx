import ComBtn from 'comComponents/ComBtn';
import styled from 'styled-components';

const StyledCrumb = styled(ComBtn)`
  color: white;
`;

export const Crumb = ({children, className}) => {
  return <StyledCrumb>{children}</StyledCrumb>;
};
