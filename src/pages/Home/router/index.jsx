import {createHashRouter} from 'react-router-dom';
import {routes} from './routes';
const router = createHashRouter([
  {
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? null : route.path,
      element: route.element,
      children: route?.children,
    })),
  },
]);
export default router;
