import Layout from '@GoCorona/components/Layout';
import Home from '@GoCorona/pages/Home';
import {Route, Routes} from 'react-router-dom';

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
