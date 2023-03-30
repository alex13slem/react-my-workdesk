import {useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {formatClassName} from '../../../utils/format';
import {ReactPortal} from '../react/ReactPortal';
import cl from './style.module.scss';

const ComModal = ({
  children,
  classNames = {
    backdrop: '',
    window: '',
    enterDone: '',
    exit: '',
  },
  wrapperId,
  isOpen = false,
  setOpen,
}) => {
  const nodeRef = useRef(null);
  const closeOnEscapeKey = (e) => e.key === 'Escape' && setOpen(false);

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [setOpen]);

  return (
    <ReactPortal wrapperId={wrapperId}>
      <CSSTransition
        in={isOpen}
        timeout={{entry: 0, exit: 300}}
        unmountOnExit
        classNames={{
          enterDone: formatClassName(
            cl[`modal-enter-done`],
            classNames.enterDone
          ),
          exit: formatClassName(cl['modal-exit'], classNames.exit),
        }}
        nodeRef={nodeRef}
      >
        <div
          className={formatClassName(cl['backdrop'], classNames.backdrop)}
          onClick={(e) => e.target === nodeRef.current && setOpen(false)}
          ref={nodeRef}
        >
          <div className={formatClassName(cl['window'], classNames.window)}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

export default ComModal;
