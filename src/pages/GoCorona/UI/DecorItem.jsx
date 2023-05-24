import styled from 'styled-components';

const Root = styled.div`
  ${({size}) => `--size: ${size ?? '65px'};`}

  position: absolute;
  width: var(--size);
  height: var(--size);

  background: #ec5863;
  border-radius: calc(var(--size) / 4);
`;

export const DecorItem = ({className, children, size}) => {
  return (
    <Root className={className} size={size}>
      {children}
    </Root>
  );
};
