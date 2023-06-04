import {LayoutWrap} from '@SpaceX/components/Layout';
import {useDocumentTitle} from 'hooks';
import styled from 'styled-components';
import Catalog from './sections/Catalog';
import TopPanel from './sections/TopPanel';
import AsideFilters from '@SpaceX/components/AsideFilters';

const Main = styled.main`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
`;

const Wrap = styled(LayoutWrap)`
  padding-bottom: 30px;
  flex: 1 1 auto;

  display: flex;
  gap: 30px;
`;

const Products = ({className}) => {
  useDocumentTitle('alex13slem | SpaceX | Каталог');

  return (
    <Main>
      <TopPanel />
      <Wrap>
        <AsideFilters />
        <Catalog />
      </Wrap>
    </Main>
  );
};

export default Products;
