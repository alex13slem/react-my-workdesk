import ComBtn from 'comComponents/ComBtn';
import css from './style.module.scss';
import {SVGAppleLogo, SVGGoogleLogo} from '@GoCorona/UI/SVGimages/FirmLogos';

const Footer = () => {
  return (
    <footer>
      <div className={css['container']}>
        <div className={css['icons']}>
          <ComBtn>
            <SVGGoogleLogo />
          </ComBtn>
          <ComBtn>
            <SVGAppleLogo />
          </ComBtn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
