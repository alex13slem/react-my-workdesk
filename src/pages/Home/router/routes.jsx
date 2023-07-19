import HomeNew from '@/pages/HomeNew';
import GoCorona from '@GoCorona/index';
import Home from '@Home/index';
import NotFound from '@NotFound/index';
import SpaceX from '@SpaceX/index';

export const routes = [
  {path: '/', name: 'Home', element: <HomeNew />},
  {
    path: 'gocorona/*',
    name: 'GoCorona',
    element: <GoCorona />,
  },
  {path: 'spaceX/*', name: 'SpaceX', element: <SpaceX />},
  // {path: 'home/*', name: 'HomeNew', element: <HomeNew />},
  {path: '*', name: '404', element: <NotFound />},
];
