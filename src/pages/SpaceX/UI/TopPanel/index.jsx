import {LayoutWrap} from '@SpaceX/components/Layout';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  margin-block: 32px;

  padding-block: 12px;
  display: flex;
  gap: 10px;

  background-color: #00000036;
  border-block: 1px solid rgba(152, 147, 147, 0.21);
`;

const Wrap = styled(LayoutWrap)``;

const TopPanel = ({className, children}) => {
  return (
    <Root className={className}>
      <Wrap>{children}</Wrap>
    </Root>
  );
};

export default TopPanel;
