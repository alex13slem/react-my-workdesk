import ProductCard from '@SpaceX/UI/ProductCard';
import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  grid-auto-rows: 350px;
`;

const Catalog = ({className, data}) => {
  return (
    <Root className={className}>
      {data.map((product) => (
        <ProductCard className={'card'} key={product?.id} data={product} />
      ))}
    </Root>
  );
};

export default Catalog;
