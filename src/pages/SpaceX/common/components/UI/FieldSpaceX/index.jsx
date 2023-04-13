import {forwardRef} from 'react';
import {formatClassName} from '../../../../../../utils/format';
import css from './style.module.scss';
import {SVGErrorInfo} from '../../../../img';
import ComField from '../../../../../../common/components/ComField';

const FieldSpaceX = forwardRef(
  ({className, error, fieldType, ...props}, ref) => {
    const {isSubmitted = false} = error;
    const errorInfo = {svg: <SVGErrorInfo />, message: error?.message};
    const validClass =
      isSubmitted && (!error.type ? css['valid'] : css['invalid']);
    const classNames = {
      root: formatClassName(css['root'], className, validClass),
      field: css['field'],
      errBtn: css['error__btn'],
      errMessage: css['error__message'],
      errMessageActive: css['error__message_active'],
    };

    return (
      <ComField
        ref={ref}
        classNames={classNames}
        errorInfo={errorInfo}
        fieldType={fieldType}
        {...props}
      />
    );
  }
);

export default FieldSpaceX;
