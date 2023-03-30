import css from './style.module.scss';
import {formatClassName} from '../../../../../../utils';

const TextContent = ({children, className, tag = 'p'}) => {
  const CustomTag = `${tag}`;
  return (
    <CustomTag className={formatClassName(css['text'], className)}>
      {children}
    </CustomTag>
  );
};

export default TextContent;
