import AsideFilters from '@SpaceX/components/AsideFilters';
import Breadcrumbs from '@SpaceX/components/Breadcrumbs';
import {LayoutWrap} from '@SpaceX/components/Layout';
import {useDocumentTitle} from 'hooks';
import styled from 'styled-components';
import Catalog from './sections/Catalog';

const Main = styled.main`
  flex: 1;
`;

const Wrap = styled(LayoutWrap)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Products = ({className}) => {
  useDocumentTitle('alex13slem | SpaceX | Каталог');
  return (
    <Main>
      <Wrap>
        <Breadcrumbs />
        <Catalog />
      </Wrap>
    </Main>
  );
};

export default Products;
