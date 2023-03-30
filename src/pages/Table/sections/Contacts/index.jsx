import css from './contacts.module.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const Contacts = ({gridPos}) => {
  return (
    <div className={css['contacts']} style={gridPos}>
      <ul>
        <li className={css['github']}>
          <a href="https://github.com/alex13slem" target="_blank">
            GitHub
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className={css['codepen']}>
          <a href="https://codepen.io/alex13slem" target="_blank">
            CodePen
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li className={css['telegram']}>
          <a href="https://t.me/a_s_scherba" target="_blank">
            Telegram
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
