import AsideFilters from '@SpaceX/components/AsideFilters';
import Breadcrumbs from '@SpaceX/components/Breadcrumbs';
import {LayoutWrap} from '@SpaceX/components/Layout';
import {useDocumentTitle} from 'hooks';
import styled from 'styled-components';
import Catalog from './sections/Catalog';

const Main = styled.main`
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
`;

const Wrap = styled(LayoutWrap)`
  padding-bottom: 30px;
  flex: 1 1 auto;
  height: 70vmin;
`;

const Products = ({className}) => {
  useDocumentTitle('alex13slem | SpaceX | Каталог');
  return (
    <Main>
      <Breadcrumbs />
      <Wrap>
        <Catalog />
      </Wrap>
    </Main>
  );
};

export default Products;
