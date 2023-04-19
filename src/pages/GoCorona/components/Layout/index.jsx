import {Outlet} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import css from './style.module.scss';

const Layout = () => {
  return (
    <div className={css['body']}>
      <div className={css['wrapper']}>
        <Header />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
