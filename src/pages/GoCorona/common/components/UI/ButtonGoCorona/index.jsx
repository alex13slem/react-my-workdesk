import ComBtn from '../../../../../../common/components/ComBtn';
import {formatClassName} from '../../../../../../utils/format';
import css from './button.module.scss';

const ButtonGoCorona = ({children, className, blue, ...props}) => {
  return (
    <ComBtn
      className={formatClassName(
        css['button'],
        blue && css['button_blue'],
        className
      )}
      {...props}
    >
      {children}
    </ComBtn>
  );
};

export default ButtonGoCorona;
