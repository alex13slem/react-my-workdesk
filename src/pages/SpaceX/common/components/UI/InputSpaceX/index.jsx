import {forwardRef} from 'react';
import {formatClassName} from '../../../../../../utils/format';
import css from './style.module.scss';

const InputSpaceX = forwardRef(({className, error, ...props}, ref) => {
  return (
    <label className={formatClassName(css['root'], className)}>
      {/* <pre>{error}</pre> */}
      <input ref={ref} className={formatClassName(css['input'])} {...props} />
    </label>
  );
});

export default InputSpaceX;
