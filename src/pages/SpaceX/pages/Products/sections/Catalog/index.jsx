import AsideFilters from '@SpaceX/components/AsideFilters';
import styled from 'styled-components';

const Root = styled.div`
  flex: 1;
  display: flex;
`;

const Catalog = ({className}) => {
  return (
    <Root>
      <AsideFilters />
    </Root>
  );
};

export default Catalog;
