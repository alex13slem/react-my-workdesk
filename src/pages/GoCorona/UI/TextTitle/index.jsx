import {formatClassName} from 'utils/format';
import css from './style.module.scss';

const TextTitle = ({className, children, priority = 2, marker = 'red'}) => {
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
