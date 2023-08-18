import HomeNew from '@/pages/HomeNew';
import NotFound from '@NotFound/index';
import SpaceX from '@SpaceX/index';

export const routes = [
  {path: '/', name: 'Home', element: <HomeNew />},
  {path: 'spaceX/*', name: 'SpaceX', element: <SpaceX />},
  // {path: 'home/*', name: 'HomeNew', element: <HomeNew />},
  {path: '*', name: '404', element: <NotFound />},
];
