import styled from 'styled-components';
import Board from './Board';

const Root = styled.div`
  position: relative;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 36px;
  padding: 44px 60px;
`;

const AchievementBoard = ({items, className, decor}) => {
  return (
    <Root className={className}>
      <Board items={items} />
      {decor}
    </Root>
  );
};

export default AchievementBoard;
