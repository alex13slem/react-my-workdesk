import ComDoubleRange from 'comComponents/ComDoubleRange';
import styled from 'styled-components';

const Root = styled.aside`
  background-color: #00000036;

  position: sticky;
  inset: 0;
  right: auto;
  flex: 0 0 300px;
`;

const AsideFilters = () => {
  return (
    <Root>
      <ComDoubleRange />
    </Root>
  );
};

export default AsideFilters;
