import {Route, Routes} from 'react-router-dom';

import Home from '@SpaceX/pages/Home';
import Products from '@SpaceX/pages/Products';

import Layout from '@SpaceX/components/Layout';

export const RouterSpaceX = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};
