import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '@SpaceX/components/Layout';

export const RouterSpaceX = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
