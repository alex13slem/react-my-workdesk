import {formatClassName} from 'utils/format';
import css from './style.module.scss';
import ComBtn from 'comComponents/ComBtn';

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
