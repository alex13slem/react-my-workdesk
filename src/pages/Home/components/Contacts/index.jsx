import css from './style.module.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import ComBtn from 'comComponents/ComBtn';
import {formatClassName} from 'utils/format';

const Contacts = ({className}) => {
  return (
    <section className={formatClassName(className, css['contacts'])}>
      <ComBtn
        className={css['btn']}
        href="https://github.com/alex13slem"
        target="_blank"
      >
        GitHub
        <FontAwesomeIcon icon={faGithub} />
      </ComBtn>

      <ComBtn
        className={css['btn']}
        href="https://codepen.io/alex13slem"
        target="_blank"
      >
        CodePen
        <FontAwesomeIcon icon={faCodepen} />
      </ComBtn>

      <ComBtn
        className={css['btn']}
        href="https://t.me/a_s_scherba"
        target="_blank"
      >
        Telegram
        <FontAwesomeIcon icon={faTelegram} />
      </ComBtn>
    </section>
  );
};

export default Contacts;
