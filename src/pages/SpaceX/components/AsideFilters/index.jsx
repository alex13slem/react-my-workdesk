import DoubleRange from '@SpaceX/UI/DoubleRange';
import styled from 'styled-components';

const Root = styled.aside`
  position: sticky;
  inset: 0;
  right: auto;
  flex: 0 0 314px;
  min-width: 0;

  padding: 20px;

  background-color: #00000036;
  border: 1px solid rgba(152, 147, 147, 0.21);
`;

const AsideFilters = () => {
  return (
    <Root>
      <DoubleRange title="Цена" />
    </Root>
  );
};

export default AsideFilters;
