import {Route, Routes} from 'react-router-dom';
import Layout from '../common/components/Layout';
import Home from '../pages/Home';

export const RouterSpaceX = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
