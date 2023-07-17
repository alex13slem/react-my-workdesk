import {LayoutWrap} from '@SpaceX/components/Layout';
import {useDocumentTitle, useFetching} from 'hooks';
import styled from 'styled-components';
import Catalog from './sections/Catalog';
import TopPanel from '../../components/TopPanel';
import AsideFilters from '@SpaceX/components/AsideFilters';
import {useEffect} from 'react';
import {useProductsData} from '@SpaceX/store';
import PostService from '@SpaceX/services/ProductService';

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

  const {products, limit, skip, setProducts, setLimit, setSkip, setIsLoading} =
    useProductsData();

  const [fetchPosts, isLoading, postsFetchError] = useFetching(async () => {
    const data = await PostService.getProducts({
      limit,
      skip,
    });

    setProducts(data.products);
    setLimit(data.limit);
    setSkip(data.skip);
  });

  useEffect(() => {
    fetchPosts();
  }, [products.length, limit, skip]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    postsFetchError &&
      console.error('SpaceX: Fetching product', postsFetchError);
  }, [postsFetchError]);

  return (
    <>
      <TopPanel />
      <Main>
        <Wrap>
          <AsideFilters data={products} />

          <Catalog data={products} />
        </Wrap>
      </Main>
    </>
  );
};

export default Products;
