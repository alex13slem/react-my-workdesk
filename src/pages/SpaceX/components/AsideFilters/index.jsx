import DoubleRange from '@SpaceX/UI/DoubleRange';
import {useHeaderValues} from '@SpaceX/store';
import styled from 'styled-components';

const Root = styled.aside`
  position: sticky;
  /* top: 86px; */
  flex: 0 0 314px;
  height: 100vh;

  padding: 20px;

  background-color: #00000036;
  border: 1px solid rgba(152, 147, 147, 0.21);
  backdrop-filter: blur(8px) hue-rotate(338deg);

  @media (max-width: 1199px) {
    display: none;
  }
`;

const AsideFilters = () => {
  const {reverseTop, height, margin} = useHeaderValues();
  return (
    <Root
      style={{
        top: `${reverseTop + height}px`,
        height: `calc(100vh - ${reverseTop + height + margin}px)`,
      }}
    >
      <DoubleRange title="Цена" />
    </Root>
  );
};

export default AsideFilters;
