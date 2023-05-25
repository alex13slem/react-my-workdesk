import ProductCard from '@SpaceX/UI/ProductCard';
import AsideFilters from '@SpaceX/components/AsideFilters';
import PostService from '@SpaceX/services/ProductService';
import {useFetching} from 'hooks/useFetching';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  max-height: 100%;

  gap: 30px;

  .catalog {
    flex: 1 1 auto;
    overflow: auto;

    padding-right: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    scrollbar-color: #c00000 rgba(21, 10, 1, 0.21);
    /* scrollbar-width: thin; */

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(21, 10, 1, 0.21);
      border: 1px solid rgba(152, 147, 147, 0.21);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c00000;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
    }
  }

  .card {
    height: 30vmin;
  }
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
    <Root>
      <AsideFilters />
      <div className="catalog">
        {postsData.map((post) => (
          <ProductCard className={'card'} key={post?.id} data={post} />
        ))}
      </div>
    </Root>
  );
};

export default Catalog;
