import {useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import cl from './style.module.scss';
import {ReactPortal} from '..';
import {formatClassName} from 'utils';

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
  transTime = 300,
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
        timeout={{entry: 0, exit: transTime}}
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
