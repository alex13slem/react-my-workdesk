import ComBtn from 'components/ComBtn';
import styled from 'styled-components';

const StyledButton = styled(ComBtn)`
  position: relative;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 250%;
  font-weight: 700;
  transition: 0.3s ease;
  transition-property: color, filter;
  @media (max-width: 767.98px) {
    font-size: 190%;
  }

  &:hover {
    color: var(--color3);
    text-decoration-color: var(--color2);

    svg {
      filter: drop-shadow(2.5px 2.5px 0.2px var(--color2));
    }
  }
  &:active {
    text-shadow: 2.5px 2.5px 0.2px var(--color2);
  }
`;

export const SocialLink = ({children, className, ...props}) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};
