import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  border-color: aqua;
  padding-inline: 32px;
`;

const Wrap = ({children, className, ...props}) => {
  return <Root className={className}>{children}</Root>;
};

export default Wrap;
