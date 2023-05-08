import GoCorona from '@GoCorona/index';
import Home from '@Home/index';
import NotFound from '@NotFound/index';
import SpaceX from '@SpaceX/index';
import {createRef} from 'react';

export const routes = [
  {path: '/', name: 'Home', element: <Home />, nodeRef: createRef()},
  {
    path: 'gocorona/*',
    name: 'GoCorona',
    element: <GoCorona />,
    nodeRef: createRef(),
  },
  {path: 'spaceX/*', name: 'SpaceX', element: <SpaceX />, nodeRef: createRef()},
  {path: '*', name: '404', element: <NotFound />, nodeRef: createRef()},
];
