import {Route, Routes} from 'react-router-dom';
import Layout from '../common/components/Layout';
import Home from '../pages/Home';

const RouterGoCorona = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RouterGoCorona;
