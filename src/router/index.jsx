import {Route, Routes} from 'react-router-dom';
import {Table} from '../pages';
import GoCorona from '../pages/GoCorona';
import NotFound from '../pages/NotFound';
import SpaceX from '../pages/SpaceX';
export const RootRouter = () => {
  return (
    <Routes path="/">
      <Route index element={<Table />} />
      <Route path={'/gocorona/*'} element={<GoCorona />} />
      <Route path={'/spaceX/*'} element={<SpaceX />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};
