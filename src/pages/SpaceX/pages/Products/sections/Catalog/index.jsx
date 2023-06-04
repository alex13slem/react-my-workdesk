import ProductCard from '@SpaceX/UI/ProductCard';
import AsideFilters from '@SpaceX/components/AsideFilters';
import PostService from '@SpaceX/services/ProductService';
import {useFetching} from 'hooks/useFetching';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  grid-auto-rows: 500px;
`;

const Catalog = ({className}) => {
  const [skipPosts, setSkipPosts] = useState(0);
  const [limitPosts, setlimitPosts] = useState(30);
  const [postsData, setPostsData] = useState([]);
  const [fetchPosts, isLoading, postsFetchError] = useFetching(async () => {
    const response = await PostService.getProducts({
      limit: limitPosts,
      skip: skipPosts,
    });
    const data = await response.json();
    setPostsData(data?.products);
  });

  useEffect(() => {
    fetchPosts();
  }, [skipPosts, limitPosts]);
  return (
    <Root className={className}>
      {postsData.map((post) => (
        <ProductCard className={'card'} key={post?.id} data={post} />
      ))}
    </Root>
  );
};

export default Catalog;
