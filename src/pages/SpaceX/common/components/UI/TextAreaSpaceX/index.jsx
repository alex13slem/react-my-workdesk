import {formatClassName} from '../../../../../../utils';

import css from './style.module.scss';

const TextAreaSpaceX = ({className, ...props}) => {
  return (
    <textarea
      className={formatClassName(css['text-area'], className)}
      {...props}
    />
  );
};

export default TextAreaSpaceX;
