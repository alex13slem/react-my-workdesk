import {ComBtn} from '../../../../../../common/components';
import {formatClassName} from '../../../../../../utils/format';
import css from './button.module.scss';

const ButtonGoCorona = ({children, href, to, className, blue}) => {
  const blueModificator = blue ? css['button_blue'] : '';

  return (
    <ComBtn
      to={to}
      href={href}
      className={formatClassName(css['button'], blueModificator, className)}
    >
      {children}
    </ComBtn>
  );
};

export default ButtonGoCorona;
