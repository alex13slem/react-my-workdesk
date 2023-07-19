import Layout from '../pages/layout';
import {Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/dashboard';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
