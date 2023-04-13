import css from './style.module.scss';
import logo from '../../../img/spacex_logo.webp';
import ComBtn from '../../../../../common/components/ComBtn';
import {formatClassName} from '../../../../../utils/format';
import {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import ComHeader from '../../../../../common/components/ComHeader';

const HeaderSpaceX = () => {
  const rootRef = useRef();
  const [showNav, setShowNav] = useState(false);
  const classLink = ({isActive}) =>
    isActive ? formatClassName(css['link'], css['active']) : css['link'];

  const linksData = [
    {
      id: 1,
      link: '/spacex',
      text: 'Главная',
    },
    {
      id: 2,
      link: '/',
      text: 'Каталог',
    },
    {
      id: 3,
      link: '/',
      text: 'Новости',
    },
    {
      id: 4,
      link: '/',
      text: 'О нас',
    },
    {
      id: 5,
      link: '/',
      text: 'Контакты',
    },
  ];

  return (
    <ComHeader ref={rootRef} className={css['header']}>
      <div className={css['wrap']}>
        <ComBtn className={css['site-logo']}>
          <img src={logo} alt="SpaceX" />
        </ComBtn>

        <nav className={formatClassName(css['navbar'], showNav && css['show'])}>
          {linksData.map(({id, link, text}) => (
            <ComBtn key={id} className={classLink} navigate to={link}>
              {text}
            </ComBtn>
          ))}
        </nav>

        <button className={css['burger']} onClick={() => setShowNav(!showNav)}>
          {!showNav ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </button>
      </div>
    </ComHeader>
  );
};

export default HeaderSpaceX;
