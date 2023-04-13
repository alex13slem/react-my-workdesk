import ComBtn from '../../common/components/ComBtn';
import {useDocumentTitle} from '../../hooks/';
import css from './style.module.scss';

const NotFound = () => {
  useDocumentTitle('Not Found 404 :(');
  return (
    <div className={css['root']}>
      <h1 className={css['message']}>Такой страницы нет</h1>
      <ComBtn className={css['btn']} to={'/'}>
        Вернуться на главную
      </ComBtn>
    </div>
  );
};

export default NotFound;
