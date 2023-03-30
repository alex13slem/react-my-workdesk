import {formatClassName} from '../../../../../../utils/format';
import css from './style.module.scss';

const BtnSpaceX = ({
  children = 'Нажми',
  className = '',
  red = false,
  glare = false,
  ...props
}) => {
  return (
    <button
      className={formatClassName(
        css['firm-btn'],
        red && css['firm-btn_red'],
        glare && css['firm-btn_glare'],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default BtnSpaceX;
