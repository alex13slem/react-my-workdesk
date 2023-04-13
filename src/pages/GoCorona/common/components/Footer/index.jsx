import css from './footer.module.scss';
import {SVGAppleLogo, SVGGoogleLogo} from '../images/Logos';
import ComBtn from '../../../../../common/components/ComBtn';

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
