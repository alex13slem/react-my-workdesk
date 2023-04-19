import {formatClassName} from 'utils/format';
import css from './style.module.scss';

const TextTitle = ({priority, children, marker = 'red', className = ''}) => {
  const CustomTag = `h${priority}`;
  return (
    <CustomTag
      className={formatClassName(
        css['title'],
        css[`marker-${marker}`],
        className
      )}
    >
      {children}
    </CustomTag>
  );
};

export default TextTitle;
