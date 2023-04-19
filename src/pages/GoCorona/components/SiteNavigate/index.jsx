import {setNavLinkStyle} from 'utils/setters';
import css from './style.module.scss';
import ComBtn from 'comComponents/ComBtn';
import {formatClassName} from 'utils';

const SiteNavigate = ({visible = false}) => {
  const navLinkStyle = setNavLinkStyle(css['link'], css['active']);
  const linksData = [
    {id: 1, to: '/gocorona', text: 'HOME'},
    {id: 2, to: '/', text: 'FEATURES'},
    {id: 3, to: '/', text: 'SUPPORT'},
    {id: 4, to: '/', text: 'CONTACT US'},
  ];
  return (
    <nav className={formatClassName(css['nav'], visible && css['visible'])}>
      {linksData.map((link) => (
        <ComBtn key={link.id} navigate to={link.to} className={navLinkStyle}>
          {link.text}
        </ComBtn>
      ))}
    </nav>
  );
};

export default SiteNavigate;
