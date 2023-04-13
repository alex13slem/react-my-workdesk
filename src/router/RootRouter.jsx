import {Route, Routes} from 'react-router-dom';
import GoCorona from '../pages/GoCorona';
import NotFound from '../pages/NotFound';
import SpaceX from '../pages/SpaceX';
import Home from '../pages/Home';
const RootRouter = () => {
  return (
    <Routes path="/">
      <Route index element={<Home />} />
      <Route path={'/gocorona/*'} element={<GoCorona />} />
      <Route path={'/spaceX/*'} element={<SpaceX />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};
export default RootRouter;
