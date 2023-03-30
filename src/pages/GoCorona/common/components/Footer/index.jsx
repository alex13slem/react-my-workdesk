import css from './footer.module.scss';

import googleLogo from '../../../img/footer/1.svg';
import appleLogo from '../../../img/footer/2.svg';
import {SVGAppleLogo, SVGGoogleLogo} from '../images/Logos';

const Footer = () => {
  return (
    <footer>
      <div className={css['container']}>
        <div className={css['icons']}>
          <a href="#">
            <SVGGoogleLogo />
            {/* <img src={googleLogo} alt="google_play" /> */}
          </a>
          <a href="#">
            <SVGAppleLogo />
            {/* <img src={appleLogo} alt="app_store" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
