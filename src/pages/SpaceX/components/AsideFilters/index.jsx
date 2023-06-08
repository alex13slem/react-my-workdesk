import DoubleRange from '@SpaceX/UI/DoubleRange';
import styled from 'styled-components';

const Root = styled.aside`
  position: sticky;
  top: 86px;
  flex: 0 0 314px;
  height: 100vh;

  padding: 20px;

  background-color: #00000036;
  border: 1px solid rgba(152, 147, 147, 0.21);
  backdrop-filter: blur(8px) hue-rotate(338deg);
`;

const AsideFilters = () => {
  return (
    <Root>
      <DoubleRange title="Цена" />
    </Root>
  );
};

export default AsideFilters;
