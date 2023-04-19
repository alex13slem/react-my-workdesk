import {Outlet} from 'react-router-dom';
import HeaderSpaceX from '../Header';
import css from './style.module.scss';

const Layout = () => {
  return (
    <div className={css['body']}>
      <HeaderSpaceX />
      <Outlet />
    </div>
  );
};

export default Layout;
