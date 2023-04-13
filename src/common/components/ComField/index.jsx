import {forwardRef, useState} from 'react';
import {formatClassName} from '../../../utils';

const Field = forwardRef(
  ({fieldType, ...attrs}, innerRef) =>
    (fieldType === 'textarea' && (
      <textarea ref={innerRef} {...attrs}></textarea>
    )) ||
    (fieldType === 'input' && <input ref={innerRef} {...attrs} />)
);

const ComField = forwardRef(
  (
    {
      classNames = {
        root: '',
        input: '',
        errBtn: '',
        errMessage: '',
        errMessageActive: '',
      },
      errorInfo,
      fieldType = 'input',
      ...props
    },
    ref
  ) => {
    const [activeInfo, setActiveInfo] = useState(false);

    return (
      <label className={classNames.root}>
        <Field
          ref={ref}
          fieldType={fieldType}
          className={classNames.field}
          {...props}
        />
        <button
          type="button"
          className={classNames.errBtn}
          onClick={() => setActiveInfo(!activeInfo)}
          onBlur={() => setActiveInfo(false)}
        >
          {errorInfo?.svg}
        </button>
        <p
          className={formatClassName(
            classNames.errMessage,
            activeInfo && classNames.errMessageActive
          )}
        >
          {errorInfo?.message}
        </p>
      </label>
    );
  }
);

export default ComField;
