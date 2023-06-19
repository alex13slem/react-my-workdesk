import {LayoutContext, LayoutWrap} from '@SpaceX/components/Layout';
import {useDocumentTitle, useScrollElemHide} from 'hooks';
import styled from 'styled-components';
import Catalog from './sections/Catalog';
import TopPanel from '../../components/TopPanel';
import AsideFilters from '@SpaceX/components/AsideFilters';
import {useEffect, useState} from 'react';
import {useContext} from 'react';

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

  // const [currentScrollPos, setCurrentScrollPos] = useState(0);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [topValue, setTopValue] = useState(0);
  // const heightElem = 91;

  // const handleScroll = () => {
  //   setCurrentScrollPos(window.scrollY);
  //   setPrevScrollPos(currentScrollPos);

  //   if (currentScrollPos < prevScrollPos) {
  //     setTopValue(heightElem)
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  const {headerHeight} = useContext(LayoutContext);
  const elemTopValue = useScrollElemHide(headerHeight);

  return (
    <>
      <TopPanel />
      <Main>
        <Wrap>
          <AsideFilters />
          <Catalog />
        </Wrap>
      </Main>
    </>
  );
};

export default Products;
