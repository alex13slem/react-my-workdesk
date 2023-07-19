import {useDocumentTitle} from 'hooks/useDocumentTitle';
import Router from './router';
import {useDocumentFavicon} from 'hooks/useDocumentFavicon';

const HomeNew = () => {
  useDocumentFavicon({ico: 'favicon/home.png', svg: 'favicon/home.svg'});
  useDocumentTitle('alex13slem | Welcome!');
  return <Router />;
};

export default HomeNew;
