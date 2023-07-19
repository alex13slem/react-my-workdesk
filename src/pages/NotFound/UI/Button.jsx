import ComBtn from 'components/ComBtn';
import styled from 'styled-components';

const StyledBtn = styled(ComBtn)`
  font-family: var(--font-family_var);
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 400;

  border-radius: 10px;
  box-shadow: 0 5px 0 13px transparent;

  transition: text-shadow 0.5s ease, box-shadow 0.5s ease, font-weight 0.5s ease,
    background-color 0.2s ease;
  &:hover {
    --bc: #ffffff6b;
    font-weight: 700;
    background-color: var(--bc);
    text-decoration-color: #d1745b;
    text-shadow: 2px 2px 0.5px #d3a092;
    box-shadow: 0 5px 0 15px var(--bc);
  }
`;

export const Button = ({children, className, ...props}) => {
  return (
    <StyledBtn className={className} {...props}>
      {children}
    </StyledBtn>
  );
};
